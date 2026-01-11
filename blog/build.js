import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { execSync } from "child_process";

const HTML_STRUCTURES = {
	COMMON_BASE: fs.readFileSync("blog/templates/base/index.html", "utf8"),
	HOME: fs.readFileSync("blog/templates/home/structure.html", "utf8")
	// POST: The structure of a post is the common base + the markdown converted into HTML
}

const DIRS_FILES = {
	MARKDOWN: "blog/markdown/",
	POSTS: "blog/posts/"
}

const STYLES = {
	HOME: '<link rel="stylesheet" href="/blog/templates/home/styles.css"/>',
	POST: '<link rel="stylesheet" href="/blog/templates/posts/styles.css"/>',
}

const SEGMENTER = new Intl.Segmenter(undefined, {
  granularity: "word"
});

const WPM_READING_SPEED = 184 // Average I found online across languages

const MARKDOWN_DATA = fs.readdirSync(DIRS_FILES.MARKDOWN)
	.filter(fileName => fileName.endsWith(".md"))
	.reduce(function(accumulator, fileName) {
	const filePath = path.join(DIRS_FILES.MARKDOWN, fileName)
	const { data, content } = matter(fs.readFileSync(filePath, "utf8"));

	const frontmatterStatus = validateFrontMatter(data, fileName)
	if (frontmatterStatus.failed) {
		throw new Error(frontmatterStatus.msg)
	}

	if (content === "") {
		throw new Error(`The "${fileName}" markdown file is empty`)
	}

	data.prettyDate = data.date.toLocaleDateString("en-US", {
    	year: "numeric",
    	month: "short",
    	day: "numeric",
    	timeZone: "UTC"
	})

	accumulator.push({
		targetDir: `${path.join(DIRS_FILES.POSTS, path.basename(fileName, path.extname(fileName)))}/`,
		frontMatter: data,
		content: content,
		estimatedReadingTimeMinutes: (() => {

			let wordCount = 0;
			for (const { isWordLike } of SEGMENTER.segment(content)) {
				if (isWordLike) wordCount++;
			}
			const readingTimeMinutes = Math.floor(wordCount / WPM_READING_SPEED)
			return readingTimeMinutes;
		})()
	})
	return accumulator
}, []).sort((a, b) => b.frontMatter.date - a.frontMatter.date);

function validateFrontMatter(frontMatter, filePath) {
	if (Object.keys(frontMatter).length === 0) {
		return {failed: true, msg: `No front matter found in the "${filePath}" markdown file`}
	}

	const REQUIRED_KEYS = ["title", "date", "description"] 

	for (const key of REQUIRED_KEYS) {
		const value = frontMatter?.[key];

		if (value == null || value === "") {
			return {failed: true, msg: `Empty or missing "${key}" front matter key in the "${filePath}" markdown file`}
		}
	}

	return {failed: false}
}

function buildHTMLPage(styles, content) {
	return HTML_STRUCTURES.COMMON_BASE.replace("{styles}", styles).replace("{content}", content)
}

function buildHomePage() {
	let post_entries = MARKDOWN_DATA.reduce(function(accumulator, fileData) {
		const data = fileData.frontMatter

		let new_entry = `
<article class="post-preview">
	<header>
		<time class="post-preview-date">${data.prettyDate}</time>
		<a href="/${fileData.targetDir}"><h2 class="post-preview-title">${fileData.frontMatter.title}</h2></a>
	</header>
	<section class="post-preview-description">
		<p>${fileData.frontMatter.description || ""}</p>
	</section>
	<time class="post-preview-read">${fileData.estimatedReadingTimeMinutes} min read</time>
</article>
`
		return accumulator + new_entry	
	}, "")

	const homePageContent = HTML_STRUCTURES.HOME.replace("{content}", post_entries)
	const final = buildHTMLPage(STYLES.HOME, homePageContent)
	fs.writeFileSync("blog/index.html", final);
}

function buildPosts() {
	MARKDOWN_DATA.forEach(function(fileData) {
		const postHTMLContent = `
<main id="content-container">
	<article id="post">
		<header>
			<h2 id="post-title">${fileData.frontMatter.title}</h2>
			<div id="post-preview-time-data">
				<time>${fileData.frontMatter.prettyDate}</time>
				<span class="separator">•</span>
				<time>${fileData.estimatedReadingTimeMinutes} min read</time>
			</div>
		</header>
		<section id="post-content">
			${marked(fileData.content)}
		</section>
	</article>
</main>
`

		fs.mkdir(fileData.targetDir, { recursive: true }, (err) => {
		  if (err) {
			console.error('Error creating directory:', err);
		  }
		});

		fs.writeFileSync(path.join(fileData.targetDir, "index.html"), buildHTMLPage(STYLES.POST, postHTMLContent), "utf8");
	})
}

buildHomePage()
buildPosts()
