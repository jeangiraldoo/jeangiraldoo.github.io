<script lang="ts">
	import Nav from "../components/Header.svelte";
</script>


<div class="page">
	<Nav />

	<slot />
</div>

<style>
	.page {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr;
	}

	@supports (height: 100dvh) {
		.page {
			min-height: 100dvh;
		}
	}
</style>
