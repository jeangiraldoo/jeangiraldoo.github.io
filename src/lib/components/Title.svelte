<script lang="ts">
	import type { Component } from "svelte";

	interface Props {
		title: string;
		Icon?: Component;
		level?: 1 | 2 | 3 | 4 | 5 | 6;
		size?: string;
		colour?: string;
		iconBackgroundColour?: string;
		align?: "center" | "left";
		class?: string;
	}

	let {
		title,
		Icon,
		level = 3,
		size,
		colour,
		iconBackgroundColour,
		align = "center",
		class: className,
	}: Props = $props();

	const sizeMap: Record<string, string> = {
		"0.875rem": "text-sm",
		"1rem": "text-base",
		"1.125rem": "text-lg",
		"1.25rem": "text-xl",
		"1.375rem": "text-2xl",
		"1.5rem": "text-2xl",
		"1.75rem": "text-3xl",
		"2rem": "text-3xl",
		"2.5rem": "text-4xl",
	};

	function sizeClass(s?: string): string {
		if (!s) return "";
		return sizeMap[s] ?? `text-[${s}]`;
	}
</script>

<svelte:element
		this={`h${level}`}
		class={`flex items-center gap-[5px] m-0 ${align === "left" ? "justify-start" : "justify-center"} ${sizeClass(size)} text-[var(--title-text-colour)] [&_svg]:size-[1.1em] [&_svg]:text-[var(--icon-background-colour)] ${className ?? ""}`}
		style:--title-text-colour={colour ?? "var(--theme-text-colour)"}
		style:--icon-background-colour={
			iconBackgroundColour ?? "var(--theme-primary-colour)"
		}
	>
		{#if Icon}
			<Icon />
		{/if}
		{title}
	</svelte:element>

