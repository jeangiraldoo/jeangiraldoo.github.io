<script lang="ts">
	import type { Component } from "svelte";

	interface Props {
		title: string;
		Icon?: Component;
		level?: 1 | 2 | 3 | 4 | 5 | 6;
		size?: string;
		colour?: string;
		backgroundColour?: string;
		iconBackgroundColour?: string;
		align?: "center" | "left";
	}

	let {
		title,
		Icon,
		level = 3,
		size,
		colour,
		backgroundColour,
		iconBackgroundColour,
		align = "center",
	}: Props = $props();
</script>

<div class="title">
	<svelte:element
		this={`h${level}`}
		style:--title-text-colour={colour}
		style:--title-font-size={size}
		style:--title-background-colour={backgroundColour}
		style:--icon-background-colour={iconBackgroundColour}
		style:--title-align={align === "left" ? "flex-start" : "center"}
	>
		{#if Icon}
			<Icon />
		{/if}
		{title}
	</svelte:element>
</div>

<style>
	:where(.title) :global(h1),
	:where(.title) :global(h2),
	:where(.title) :global(h3),
	:where(.title) :global(h4),
	:where(.title) :global(h5),
	:where(.title) :global(h6) {
		display: flex;
		align-items: center;
		justify-content: var(--title-align, center);
		gap: 5px;
		margin: 0;
		color: var(--title-text-colour, var(--theme-text-colour));
		background-color: var(--title-background-colour, transparent);
		font-size: var(--title-font-size, inherit);

		:global(svg) {
			width: 1.1em;
			height: 1.1em;
			color: var(--icon-background-colour, var(--theme-primary-colour));
		}
	}
</style>

