<script lang="ts">
	import type { Pathname } from "$app/types";
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { locales, localizeHref } from "$lib/paraglide/runtime";

	import ThemeToggler from "$lib/components/ThemeToggler.svelte";
	import HeaderMenu from "$lib/components/HeaderMenu.svelte";
</script>

<div class="page min-h-dvh grid grid-rows-[auto_1fr]">
	<header
		class="relative flex flex-wrap items-center px-5 gap-x-[30px] gap-y-2.5 max-md:px-2.5 max-md:gap-x-2.5"
	>
		<a
			href={localizeHref("/")}
			class="text-[var(--theme-primary-colour)] text-2xl"
		>
			Jean Giraldo
		</a>

		<HeaderMenu />
		<ThemeToggler />
	</header>
	<slot></slot>
</div>

<div class="hidden">
	{#each locales as locale (locale)}
		<a
			href={resolve(
				localizeHref(page.url.pathname, { locale }) as Pathname,
			)}>{locale}</a
		>
	{/each}
</div>