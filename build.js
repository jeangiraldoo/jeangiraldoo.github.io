import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { execSync } from "child_process";

const pairs = {
	"./templates/home.html": "./index.html",
	"./templates/projects.html": "./projects/index.html"
}

const header = fs.readFileSync("./partials/header/header.html", "utf8")

function build_page(path) {
	const index = fs.readFileSync(path, "utf8")
	const homePageContent = index.replace("{header}", header)

	return homePageContent
}

for (const [key, value] of Object.entries(pairs)) {
	const pageContent = build_page(key)
	fs.writeFileSync(value, pageContent);
}

// POST: The structure of a post is the common base + the markdown converted into HTML
const COMMON_BASE_HTML = build_page("./templates/blog_common.html")

const postsContainer = (`
<main id="content-container">
  <section id="post-preview-container" aria-label="Latest blog posts">
	{content}
  </section>
</main>
`)

const DIRS_FILES = {
	MARKDOWN: "blog/markdown/",
	POSTS: "blog/posts/"
}

const STYLES = {
	HOME: '<link rel="stylesheet" href="/blog/css/home.css"/>',
	POST: '<link rel="stylesheet" href="/blog/css/post.css"/>',
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
	return COMMON_BASE_HTML.replace("{styles}", styles).replace("{content}", content)
}

function buildHomePage() {
	let post_entries = MARKDOWN_DATA.reduce(function(accumulator, fileData) {
		const data = fileData.frontMatter

		let new_entry = `
	<article class="post-preview">
		<header>
			<a href="/${fileData.targetDir}"><h2 class="post-title">${fileData.frontMatter.title}</h2></a>
		</header>
		<section class="post-preview-time-container">
			<time class="post-preview-date">${data.prettyDate}</time>
			<span class="separator">•</span>
			<time class="post-preview-read">${fileData.estimatedReadingTimeMinutes} min read</time>
		</section>
		<section class="post-preview-description">
			<p>${fileData.frontMatter.description || ""}</p>
		</section>
	</article>
	`
		return accumulator + new_entry	
	}, "")

	const postsBlock = (`
	<main id="content-container">
	  <section id="post-preview-container" aria-label="Latest blog posts">
		${post_entries}
	  </section>
	</main>
	`)

	const homePageContent = postsBlock.replace("{content}", postsBlock)
	const final = buildHTMLPage(STYLES.HOME, homePageContent)

	fs.writeFileSync("blog/index.html", final);
}

function buildPosts() {
	MARKDOWN_DATA.forEach(function(fileData) {
		const postHTMLContent = `
<main id="content-container">
	<article id="post">
		<header>
			<h2 class="post-title">${fileData.frontMatter.title}</h2>
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
