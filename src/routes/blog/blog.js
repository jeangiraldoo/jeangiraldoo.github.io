import matter from 'gray-matter';
import { marked } from 'marked';

const markdownFiles = import.meta.glob('./posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

function parsePost(filePath, markdown) {
	const { data, content } = matter(markdown);

	const slug = filePath
		.split('/')
		.pop()
		.replace('.md', '');

	const wordCount = content
		.trim()
		.split(/\s+/)
		.filter(Boolean)
		.length;

	return {
		slug,
		title: data.title,
		description: data.description,
		prettyDate: data.date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			timeZone: 'UTC'
		}),
		readingTimeMinutes: Math.max(1, Math.floor(wordCount / 184)),
		content: marked.parse(content)
	};
}

export function getPost(slug) {
	const filePath = `./posts/${slug}.md`;
	const markdown = markdownFiles[filePath];

	if (!markdown) {
		return null;
	}

	return parsePost(filePath, markdown);
}

export function getPosts() {
	return Object.entries(markdownFiles)
		.map(([filePath, markdown]) => parsePost(filePath, markdown))
		.sort((a, b) => b.prettyDate.localeCompare(a.prettyDate));
}
