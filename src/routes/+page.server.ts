import type { PageServerLoad } from './$types';
import { getPosts } from './blog/blog';

export const load: PageServerLoad = () => {
	return { posts: getPosts().slice(0, 3) };
};
