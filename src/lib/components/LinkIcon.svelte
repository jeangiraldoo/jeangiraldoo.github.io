<script lang="ts">
	import type { Component } from "svelte";

	interface props {
		id?: string;
		class?: string;
		href: string;
		Icon: Component;
		iconPosition: "left" | "right";
		label: string;
		labelColour: string;
		hoverLabelColour?: string;
		fontSize?: string;
	}

	const {
		id,
		class: className,
		href,
		Icon,
		iconPosition,
		label,
		labelColour,
		hoverLabelColour,
		fontSize,
	}: props = $props();
</script>

<a
	{href}
	{id}
	class={className}
	style:--label-colour={labelColour}
	style:--hover-label-colour={hoverLabelColour}
	style:--font-size={fontSize}
>
	{#if iconPosition == "left"}
		<Icon />
	{/if}
	{label}
	{#if iconPosition == "right"}
		<Icon />
	{/if}
</a>

<style>
	a {
		display: flex;
		text-align: center;
		gap: 10px;
		align-items: center;
		color: var(--label-colour);
		font-size: var(--font-size);

		&:hover {
			color: var(--hover-label-colour);
		}
	}
</style>
