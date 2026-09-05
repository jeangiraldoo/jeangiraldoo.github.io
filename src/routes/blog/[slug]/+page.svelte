<script lang="ts">
	import type { PageData } from "./$types";

	let { data: postData }: { data: PageData } = $props();
</script>

<main class="w-1/2 max-md:w-[90%] mx-auto">
	<article>
		<header class="flex flex-col gap-5">
			<h2
				class="text-[var(--theme-primary-colour)] text-center relative text-3xl m-0 max-md:text-2xl"
			>
				{postData.title}
			</h2>

			<div class="flex items-center justify-center">
				<time class="text-secondary text-sm">{postData.prettyDate}</time>
				<span class="text-secondary text-sm mx-2.5">•</span>
				<time class="text-secondary text-sm"
					>{postData.readingTimeMinutes} min read</time
				>
			</div>
		</header>

		<section id="post-content">
			{@html postData.content}
		</section>
	</article>
</main>

<style>
	#post-content {
		overflow-wrap: anywhere;
		word-break: break-word;

		:global(p) {
			color: var(--theme-text-colour);
			font-size: 1rem;

			&:first-child::first-letter {
				color: var(--theme-quaternary-colour);
				font-size: 2rem;
				font-family: cursive;
			}

			:global(a) {
				text-decoration: underline;
				color: var(--theme-tertiary-colour);
				display: inline-block;
				overflow-wrap: anywhere;
			}
		}

		:global(img) {
			max-width: 100%;
			height: auto;
		}

		:global(pre) {
			max-width: 100%;
			overflow-x: auto;
		}

		:global(code) {
			overflow-wrap: anywhere;
			word-break: break-word;
		}

		:global(pre code) {
			white-space: pre;
			overflow-wrap: normal;
			word-break: normal;
		}

		:global(table) {
			max-width: 100%;
			display: block;
			overflow-x: auto;
		}

		:global(blockquote) {
			max-width: 100%;
		}

		:global(ul) {
			:global(li) {
				color: var(--theme-text-colour);
			}
		}

		:global(ul) {
			list-style: none;
			padding: 0;
		}
	}

	:global(*)::selection {
		background-color: var(--theme-quaternary-colour);
		color: black;
	}
	:global(*)::spelling-error {
		background-color: var(--theme-quaternary-colour);
		color: black;
	}
</style>
