<script lang="ts">
	import type { Component } from "svelte";

	interface props {
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
	class={`flex items-center justify-center gap-2.5 text-center text-[var(--label-colour)] text-[length:var(--font-size)] hover:text-[var(--hover-label-colour)] ${className ?? ""}`}
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
