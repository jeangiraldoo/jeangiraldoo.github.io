<script lang="ts">
	type Post = {
		slug: string;
		title: string;
		description: string;
		date: Date;
		prettyDate: string;
		readingTimeMinutes: number;
	};

	interface Props {
		totalPosts?: number;
		layout?: "line" | "block";
	}

	const markdownFiles = import.meta.glob("../../routes/blog/posts/*.md", {
		eager: true,
		query: "?raw",
		import: "default",
	}) as Record<string, string>;

	function parseFrontMatter(markdown: string): {
		data: Record<string, string>;
		content: string;
	} {
		const lines = markdown.replace(/^\uFEFF/, "").split("\n");

		if (lines[0].trim() !== "---") {
			return { data: {}, content: markdown.trim() };
		}

		const data: Record<string, string> = {};
		let i = 1;

		while (i < lines.length && lines[i].trim() !== "---") {
			const match = lines[i].match(/^([^:]+):\s*(.*)$/);
			if (match) {
				data[match[1].trim()] = match[2]
					.trim()
					.replace(/^["']|["']$/g, "");
			}
			i++;
		}

		return {
			data,
			content: lines
				.slice(i + 1)
				.join("\n")
				.trim(),
		};
	}

	function parsePost(filePath: string, markdown: string): Post {
		const { data, content } = parseFrontMatter(markdown);

		const slug = filePath.split("/").pop()?.replace(".md", "") ?? "";

		const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

		const date = new Date(data["date"]);

		return {
			slug,
			title: data["title"],
			description: data["description"],
			date,
			prettyDate: date.toLocaleDateString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric",
				timeZone: "UTC",
			}),
			readingTimeMinutes: Math.max(1, Math.floor(wordCount / 184)),
		};
	}

	function getPosts(): Post[] {
		return Object.entries(markdownFiles)
			.map(([filePath, markdown]) => parsePost(filePath, markdown))
			.sort((a, b) => b.prettyDate.localeCompare(a.prettyDate));
	}

	let allPosts: Post[] = getPosts();

	const { totalPosts, layout = "block" }: Props = $props();

	let posts: Post[] =
		totalPosts !== undefined ? allPosts.slice(0, totalPosts) : allPosts;
</script>

<section class="flex flex-col gap-8 mt-4 min-w-0">
	{#each posts as post}
		{#if layout === "line"}
			<a
				href={`/blog/${post.slug}`}
				class="flex items-center justify-center gap-4 text-left"
			>
				<time class="post-time text-base whitespace-nowrap shrink-0">
					{post.prettyDate}
				</time>
				<span class="post-title text-xl max-sm:text-base">
					{post.title}
				</span>
			</a>
		{:else}
			<article class="flex flex-col gap-1">
				<header>
					<a href={`/blog/${post.slug}`}>
						<h2 class="post-title text-2xl">{post.title}</h2>
					</a>
				</header>

				<section class="flex gap-4 *:text-base post-time">
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
		{/if}
	{/each}
</section>

<style>
	.post-time,
	.post-time * {
		color: var(--theme-secondary-colour);
	}

	.post-title {
		color: white;
	}
</style>
