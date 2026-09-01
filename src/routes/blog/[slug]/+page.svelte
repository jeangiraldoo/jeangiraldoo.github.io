<script lang="ts">
	import type { PageData } from "./$types";

	let { data: postData }: { data: PageData } = $props();
</script>

<main id="content-container">
	<article id="post">
		<header>
			<h2 class="post-title">{postData.title}</h2>

			<div class="post-preview-time">
				<time>{postData.prettyDate}</time>
				<span class="separator">•</span>
				<time>{postData.readingTimeMinutes} min read</time>
			</div>
		</header>

		<section id="post-content">
			{@html postData.content}
		</section>
	</article>
</main>

<style>
	#content-container {
		width: 50%;
	}

	#post {
		header {
			display: flex;
			flex-direction: column;
			gap: 20px;

			.post-title {
				color: var(--theme-primary-colour);
				text-align: center;
				position: relative;
			}

			.post-preview-time {
				time,
				.separator {
					color: var(--theme-secondary-colour);
				}

				.separator {
					margin: 0 10px;
				}
			}
		}

		#post-content {
			overflow-wrap: anywhere;
			word-break: break-word;

			:global(p) {
				color: var(--theme-text-colour);

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
	}

	:global(*)::selection {
		background-color: var(--theme-quaternary-colour);
		color: black;
	}
	:global(*)::spelling-error {
		background-color: var(--theme-quaternary-colour);
		color: black;
	}

	@media (max-width: 768px) {
		#content-container {
			width: 90%;
		}
	}
</style>
