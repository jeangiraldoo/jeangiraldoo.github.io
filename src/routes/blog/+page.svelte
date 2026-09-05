<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import type { PageData } from "./$types";
	import Title from "$lib/components/Title.svelte";

	let { data }: { data: PageData } = $props();
</script>

<main>
	<Title
		title={m.blog_label()}
		level={1}
		size="2.5rem"
		colour="var(--theme-primary-colour)"
		align="left"
	/>
	<section id="post-preview-container" aria-label={m.latest_posts_aria()}>
		{#each data.posts as post}
			<article class="post">
				<header>
					<a href={`/blog/${post.slug}`}>
						<h2 class="post-title">{post.title}</h2>
					</a>
				</header>

				<section class="post-preview-time-container">
					<time class="post-preview-date">{post.prettyDate}</time>
					<span class="separator">•</span>
					<time class="post-preview-read">
						{post.readingTimeMinutes} min read
					</time>
				</section>

				<section class="post-preview-description">
					<p>{post.description}</p>
				</section>
			</article>
		{/each}
	</section>
</main>

<style>
	main {
		width: 50%;
	}

	#post-preview-container {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;

		.post {
			display: flex;
			flex-direction: column;
			gap: 5px;

			header {
				a {
					display: inline-block;
					color: hsl(175, 65%, 72%);
				}

				.post-title {
					font-size: 1.5rem;
					margin: 0;
				}
			}

			.post-preview-time-container {
				display: flex;
				gap: 10px;

				.post-preview-date,
				.post-preview-read,
				.separator {
					color: var(--theme-tertiary-colour);
					font-size: 0.875rem;
				}
			}

			.post-preview-description {
				p {
					color: #b4cae0;
					margin: 0;
					font-size: 1rem;
				}
			}
		}
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
		}

		:global(.title h1) {
			font-size: 1.75rem;
		}
	}
</style>
