<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import { page } from "$app/state";
	import { m } from "$lib/paraglide/messages.js";

	let currentPage = $derived(page.url.pathname);

	const pages: Record<string, () => string> = {
		"/projects": m.nav_projects,
		"/blog": m.nav_blog,
		"/about": m.nav_about,
		"/contact": m.nav_contact,
	};

	function isWithinPath(path: string) {
		return currentPage.includes(localizeHref(path));
	}
</script>

<nav class="flex flex-wrap gap-5 max-md:flex-col max-md:items-center max-md:gap-12 max-md:order-1">
	{#each Object.entries(pages) as [path, message]}
		<a
			href={localizeHref(path)}
			aria-current={isWithinPath(path) ? "page" : undefined}
			class="flex items-center text-white text-xl hover:text-secondary max-md:text-2xl max-md:text-black"
			class:text-secondary={isWithinPath(path)}
		>
			{message()}
		</a>
	{/each}
</nav>
