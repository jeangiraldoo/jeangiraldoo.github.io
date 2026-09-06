<script lang="ts">
	import type { Pathname } from "$app/types";
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { onMount } from "svelte";
	import { locales, localizeHref } from "$lib/paraglide/runtime";

	import HeaderMenu from "$lib/components/HeaderMenu.svelte";
	import Toggle from "$lib/components/Toggle.svelte";

	import ToggleRightIcon from "@lucide/svelte/icons/toggle-right";
	import ToggleLeftIcon from "@lucide/svelte/icons/toggle-left";

	let isLightModeOn = $state(false);

	onMount(() => {
		const theme = localStorage.getItem("jeangiraldooTheme") ?? "dark-mode";

		isLightModeOn = theme === "light-mode";
	});
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
		<div class="max-md:order-2 max-md:ms-auto">
			<Toggle
				initialState={isLightModeOn}
				handler={(isNextLight: boolean) => {
					document.body.classList.remove("dark-mode", "light-mode");

					const newTheme = isNextLight ? "light-mode" : "dark-mode";

					document.body.classList.add(newTheme);
					localStorage.setItem("jeangiraldooTheme", newTheme);
				}}
			>
				{#snippet onIcon()}
					<ToggleRightIcon class="size-14 text-black max-md:size-7" />
				{/snippet}

				{#snippet offIcon()}
					<ToggleLeftIcon class="size-14 text-white max-md:size-7" />
				{/snippet}
			</Toggle>
		</div>
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
