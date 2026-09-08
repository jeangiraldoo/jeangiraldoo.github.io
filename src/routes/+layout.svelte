<script lang="ts">
	import type { Pathname } from "$app/types";
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { onMount } from "svelte";
	import { locales, localizeHref } from "$lib/paraglide/runtime";

	import SiteHeader from "$lib/components/SiteHeader.svelte";

	let isLightModeOn = $state(false);

	onMount(() => {
		const theme = localStorage.getItem("jeangiraldooTheme") ?? "dark-mode";

		isLightModeOn = theme === "light-mode";
	});

	let { children } = $props();
</script>

<div class="page min-h-dvh grid grid-rows-[auto_1fr]">
	<SiteHeader {isLightModeOn} />

	{@render children()}
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
