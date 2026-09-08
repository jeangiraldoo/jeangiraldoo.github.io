<script lang="ts">
	import type { Snippet } from "svelte";
	import { untrack } from "svelte";

	interface Props {
		handler: (toggleState: boolean) => void;
		onIcon: Snippet;
		offIcon: Snippet;
		initialState: boolean;
		class?: string;
	}

	const {
		handler,
		onIcon,
		offIcon,
		initialState,
		class: className,
	}: Props = $props();

	let currentState = $state(untrack(() => initialState));
</script>

<button
	class={className}
	onclick={() => {
		currentState = !currentState;
		handler(currentState);
	}}
>
	{#if currentState}
		{@render onIcon()}
	{:else}
		{@render offIcon()}
	{/if}
</button>
