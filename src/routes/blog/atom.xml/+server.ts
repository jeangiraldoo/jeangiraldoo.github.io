import { Feed } from "feed";
import type { Author } from "feed";
import { getPosts } from "../blog";
import { WEBSITE_URL, EMAIL } from "$app/env/private";

export const prerender = true;

const jeanAuthor: Author = {
	name: "Jean Giraldo",
	email: EMAIL,
	link: WEBSITE_URL,
};

export function GET() {
	const posts = getPosts();

	const feed = new Feed({
		title: "Jean's Blog",
		description: "This is my personal feed!",
		id: `${WEBSITE_URL}/blog`,
		link: `${WEBSITE_URL}/blog`,
		language: "en",
		copyright: "All rights reserved 2026, Jean Giraldo",
		updated: posts[0]?.date,
		generator: false,
		feedLinks: {
			atom: `${WEBSITE_URL}/blog/atom.xml`,
		},
		author: jeanAuthor,
	});

	posts.forEach((post) => {
		feed.addItem({
			title: post.title,
			id: `${WEBSITE_URL}/blog/${post.slug}`,
			link: `${WEBSITE_URL}/blog/${post.slug}`,
			description: post.description,
			content: post.content,
			author: [jeanAuthor],
			contributor: [],
			date: post.date,
		});
	});

	return new Response(feed.atom1(), {
		headers: {
			"Content-Type": "application/atom+xml; charset=utf-8",
		},
	});
}