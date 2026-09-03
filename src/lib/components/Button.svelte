<script lang="ts">
	import type { Component } from "svelte";

	interface Props {
		id?: string | null;
		backgroundColor: string;
		hoverBackgroundColor: string;
		message: string;
		href: string;
		icon?: Component;
		iconPosition?: "left" | "right";
	}

	const {
		id = null,
		message,
		href,
		backgroundColor,
		hoverBackgroundColor,
		icon: Icon,
		iconPosition = "left",
	}: Props = $props();
</script>

<a
	{id}
	class="button"
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

<style>
	.button {
		display: inline-flex;
		align-items: center;
		gap: 0.5em;
		padding: 12px 24px;
		border-radius: 10px;
		color: var(--theme-bg-colour);
		font-size: 1.25rem;
		font-weight: bold;
		background-color: var(--background-color);
		transition:
			transform 0.2s,
			background-color 0.3s;

		&:hover {
			transform: scale(1.035, 1.035);
			background-color: var(--hover-background-colour);
		}
	}

	.button :global(svg) {
		width: 1.25em;
		height: 1.25em;
		color: inherit;
	}
</style>
