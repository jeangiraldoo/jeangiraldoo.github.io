<script lang="ts">
	import type { Pathname } from "$app/types";
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { locales, localizeHref } from "$lib/paraglide/runtime";

	import NavBar from "$lib/components/NavBar.svelte";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";
	import ThemeToggler from "$lib/components/ThemeToggler.svelte";
</script>

<div class="page">
	<header>
		<NavBar />
		<ThemeToggler />
		<LanguagePicker />
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
		padding: 0 20px;
		align-items: center;
		gap: 30px;
		--header-font-size: 1.25rem;
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

	@media (max-width: 768px) {
		header {
			padding: 0 10px;
			gap: 15px;
		}
	}
</style>
