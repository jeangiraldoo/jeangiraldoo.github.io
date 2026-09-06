<script lang="ts">
	import type { Snippet } from "svelte";
	import { untrack } from "svelte";

	interface Props {
		handler: (toggleState: boolean) => void;
		onIcon: Snippet;
		offIcon: Snippet;
		initialState: boolean;
	}

	const { handler, onIcon, offIcon, initialState }: Props = $props();

	let currentState = $state(untrack(() => initialState));
</script>

<button
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
