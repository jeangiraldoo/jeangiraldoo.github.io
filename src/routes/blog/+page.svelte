<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import type { PageData } from "./$types";
	import Title from "$lib/components/Title.svelte";

	let { data }: { data: PageData } = $props();
</script>

<main class="w-1/2 max-md:w-[90%] mx-auto">
	<Title
		title={m.blog_label()}
		level={1}
		size="2.5rem"
		colour="var(--theme-primary-colour)"
		align="left"
		class="max-md:text-3xl"
	/>
	<section
		aria-label={m.latest_posts_aria()}
		class="flex flex-col gap-8 mt-4"
	>
		{#each data.posts as post}
			<article class="flex flex-col gap-1">
				<header>
					<a href={`/blog/${post.slug}`}>
						<h2 class="text-secondary text-2xl">{post.title}</h2>
					</a>
				</header>

				<section class="flex gap-4 *:text-tertiary *:text-base">
					<time>{post.prettyDate}</time>
					<span>•</span>
					<time>
						{post.readingTimeMinutes} min read
					</time>
				</section>

				<section>
					<p class="text-base text-blue-200">{post.description}</p>
				</section>
			</article>
		{/each}
	</section>
</main>
