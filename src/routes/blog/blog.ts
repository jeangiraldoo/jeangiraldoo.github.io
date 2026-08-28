import matter from 'gray-matter';
import { marked } from 'marked';

export type Post = {
	slug: string;
	title: string;
	description: string;
	date: Date;
	prettyDate: string;
	readingTimeMinutes: number;
	content: string;
};

type FrontMatter = {
	title: string;
	description: string;
	date: Date;
};

const markdownFiles = import.meta.glob('./posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

function parsePost(filePath: string, markdown: string): Post {
	const { data, content } = matter(markdown);

	const slug = filePath.split('/').pop()?.replace('.md', '') ?? '';

	const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

	const { title, description, date } = data as FrontMatter;

	return {
		slug,
		title,
		description,
		date,
		prettyDate: date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			timeZone: 'UTC'
		}),
		readingTimeMinutes: Math.max(1, Math.floor(wordCount / 184)),
		content: marked.parse(content) as string
	};
}

export function getPost(slug: string): Post | null {
	const filePath = `./posts/${slug}.md`;
	const markdown = markdownFiles[filePath];

	if (!markdown) {
		return null;
	}

	return parsePost(filePath, markdown);
}

export function getPosts(): Post[] {
	return Object.entries(markdownFiles)
		.map(([filePath, markdown]) => parsePost(filePath, markdown))
		.sort((a, b) => b.prettyDate.localeCompare(a.prettyDate));
}
