<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import { page } from "$app/state";
	import { m } from "$lib/paraglide/messages.js";
	import MenuIcon from "@lucide/svelte/icons/square-menu";
	import XIcon from "@lucide/svelte/icons/square-x";

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

<nav>
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
		flex-wrap: wrap;
		gap: 20px;

		a {
			display: flex;
			align-items: center;
			color: white;
			font-size: var(--header-font-size);

			&:hover {
				color: var(--theme-secondary-colour);
			}
		}

		.selected-link {
			color: var(--theme-secondary-colour);
		}
	}

	:global(.language-picker) {
		margin-left: auto;
	}

	:global(svg) {
		width: 2rem;
		height: 2rem;
		color: white;
	}

	@media (max-width: 800px) {
		nav {
			gap: 3rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			order: 1;

			a {
				font-size: 1.5rem;
				color: black;
			}

			.selected-link {
				color: var(--theme-secondary-colour);
			}
		}

		:global(#language-picker) {
			order: 0;
		}
	}
</style>
