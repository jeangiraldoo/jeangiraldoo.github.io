import type { PageServerLoad } from './$types';
import { getPosts } from './blog';

export const load: PageServerLoad = () => {
	return { posts: getPosts() };
};
