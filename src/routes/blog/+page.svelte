<script lang="ts">
	import { m } from "$lib/paraglide/messages.js";
	import type { PageData } from "./$types";
	import Title from "$lib/components/Title.svelte";
	import BlogPreview from "$lib/components/BlogPreview.svelte";

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
	<BlogPreview layout="block" />
</main>
