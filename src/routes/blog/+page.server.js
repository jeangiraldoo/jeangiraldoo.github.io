import { getPosts } from './blog.js';

export function load() {
	return { posts: getPosts() };
}
