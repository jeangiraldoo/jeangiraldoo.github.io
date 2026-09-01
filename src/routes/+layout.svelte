<script lang="ts">
	import type { Pathname } from "$app/types";
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { locales, localizeHref } from "$lib/paraglide/runtime";

	import ThemeToggler from "$lib/components/ThemeToggler.svelte";
	import HeaderMenu from "$lib/components/HeaderMenu.svelte";
</script>

<div class="page">
	<header>
		<a id="home-link" href={localizeHref("/")}>Jean Giraldo</a>

		<HeaderMenu />
		<ThemeToggler />
	</header>
	<slot></slot>
</div>

<div style="display:none">
	{#each locales as locale (locale)}
		<a
			href={resolve(
				localizeHref(page.url.pathname, { locale }) as Pathname,
			)}>{locale}</a
		>
	{/each}
</div>

<style>
	header {
		display: flex;
		flex-wrap: wrap;
		padding: 0 20px;
		align-items: center;
		column-gap: 30px;
		row-gap: 10px;
		position: relative;
		--header-font-size: 1.25rem;
		--header-height: 3.5rem;

		#home-link {
			color: var(--theme-primary-colour);
			font-size: 1.5rem;
			order: 0;
		}

		:global(#container) {
			order: 1;
			flex: 1;
		}

		:global(#theme-toggle) {
			order: 2;
		}

		:global(#language-picker) {
			order: 3;
			margin-left: auto;
		}
	}

	.page {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr;
	}

	@supports (height: 100dvh) {
		.page {
			min-height: 100dvh;
		}
	}

	@media (max-width: 800px) {
		header {
			padding: 0 10px;
			column-gap: 10px;

			:global(#container) {
				order: 3;
				flex: none;
			}

			:global(#theme-toggle) {
				order: 1;
			}

			:global(#language-picker) {
				order: 2;
				margin: 0;
			}
		}
	}
</style>
