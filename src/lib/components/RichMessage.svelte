<script lang="ts">
	import { ParaglideMessage } from "@inlang/paraglide-js-svelte";

	let { message }: { message: any } = $props();
</script>

<ParaglideMessage {message}>
	{#snippet em({ children })}
		<span>{@render children?.()}</span>
	{/snippet}

	{#snippet link({ children, options })}
		<a href={options.href as string}>{@render children?.()}</a>
	{/snippet}
</ParaglideMessage>
