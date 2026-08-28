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
				color: hsl(175, 65%, 72%);
				text-align: center;
			}

			.post-preview-time {
				time,
				.separator {
					color: var(--theme-tertiary-colour);
				}

				.separator {
					margin: 0 10px;
				}
			}
		}
	}

	@media (max-width: 768px) {
		#content-container {
			width: 90%;
		}
	}
</style>
