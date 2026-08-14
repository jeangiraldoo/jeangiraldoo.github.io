<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main id="content-container">
	<section id="post-preview-container" aria-label="Latest blog posts">
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
#content-container {
  width: 50%;
}

#post-preview-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.post-preview-time-container {
  display: flex;
  gap: 10px;
}

.post-preview-date,
.post-preview-read,
.separator {
  color: hsl(260, 70%, 68%);
}

.post-preview-description p {
  color: #b4cae0;
  margin: 0;
}

.post header a {
  display: inline-block;
  color: hsl(175, 65%, 72%);
}


@media (max-width: 768px) {
  #content-container {
    width: 90%;
  }
}
</style>
