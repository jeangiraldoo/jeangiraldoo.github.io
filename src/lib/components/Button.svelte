<script lang="ts">
	import type { Component } from "svelte";

	interface Props {
		class?: string;
		backgroundColor: string;
		hoverBackgroundColor: string;
		message: string;
		href: string;
		icon?: Component;
		iconPosition?: "left" | "right";
	}

	const {
		class: className,
		message,
		href,
		backgroundColor,
		hoverBackgroundColor,
		icon: Icon,
		iconPosition = "left",
	}: Props = $props();
</script>

<a
	class={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xl text-[var(--theme-bg-colour)] bg-[var(--background-color)] transition-[transform,background-color] hover:scale-[1.035] hover:bg-[var(--hover-background-colour)] [&_svg]:size-5 ${className ?? ""}`}
	style:--background-color={backgroundColor}
	style:--hover-background-colour={hoverBackgroundColor}
	{href}
>
	{#if Icon}
		{#if iconPosition === "left"}
			<Icon />
		{/if}
	{/if}
	{message}
	{#if Icon}
		{#if iconPosition === "right"}
			<Icon />
		{/if}
	{/if}
</a>
