<script lang="ts">
	import type { Component } from "svelte";

	interface Props {
		class?: string;
		href: string;
		message: string;
		icon?: Component;
		iconPosition?: "left" | "right";
	}

	const { class: className, href, message, icon: Icon, iconPosition = "left" }: Props = $props();
</script>

<a {href} class={`inline-flex items-center gap-2 ${className ?? ""}`}>
	{#if Icon && iconPosition === "left"}
		<Icon />
	{/if}
	{message}
	{#if Icon && iconPosition === "right"}
		<Icon />
	{/if}
</a>
