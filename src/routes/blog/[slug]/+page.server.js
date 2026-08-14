import { error } from '@sveltejs/kit';
import { getPosts, getPost } from '../blog.js';

export function entries() {
	return getPosts().map((post) => ({
		slug: post.slug
	}));
}

export function load({ params }) {
	const post = getPost(params.slug);

	if (!post) {
		error(404, 'Post not found');
	}

	return post
}
