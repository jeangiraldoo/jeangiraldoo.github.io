import { error } from '@sveltejs/kit';
import { getPosts, getPost } from '../blog';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => {
	return getPosts().map((post) => ({
		slug: post.slug
	}));
};

export const load: PageServerLoad = ({ params }) => {
	const post = getPost(params.slug);

	if (!post) {
		error(404, 'Post not found');
	}

	return post;
};
