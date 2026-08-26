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

<nav id="site-nav">
	<a id="home-link" href={localizeHref("/")}>Jean Giraldo</a>

	{#each Object.entries(pages) as [path, message]}
		<a
			href={localizeHref(path)}
			aria-current={isWithinPath(path) ? "page" : undefined}
			class:selected-link={isWithinPath(path)}
		>
			{message()}
		</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		gap: 20px;
		padding: 10px;
	}

	nav a {
		display: flex;
		align-items: center;
		color: white;
		font-size: var(--header-font-size);
	}

	.selected-link {
		color: var(--theme-secondary-colour);
	}

	nav a:hover {
		color: var(--theme-secondary-colour);
	}

	#home-link {
		color: var(--theme-primary-colour);
		font-size: 1.5rem;
	}

	:global(svg) {
		width: 22px;
		height: 22px;
		color: white;
	}

	@media (max-width: 768px) {
		nav a {
			font-size: 1rem;
		}

		#home-link {
			font-size: 1.1rem;
		}

		nav {
			gap: 12px;
		}
	}
</style>
