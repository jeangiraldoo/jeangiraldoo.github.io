<script lang="ts">
	import NavBar from "$lib/components/NavBar.svelte";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";

	import MenuIcon from "@lucide/svelte/icons/square-menu";
	import XIcon from "@lucide/svelte/icons/square-x";

	let isDisplayed = $state(false);

	function toggleBurguerNav() {
		if (!window.matchMedia("(max-width: 800px)").matches) {
			return;
		}

		let nav = document.getElementById("panel");

		isDisplayed = !isDisplayed;
		console.log(isDisplayed);

		if (nav == null) {
			return;
		}

		let newDisplay = isDisplayed ? "flex" : "none";

		nav.style.display = newDisplay;
	}
</script>

<div id="container">
	<button id="burguerNavBtn" onclick={toggleBurguerNav}>
		{#if isDisplayed}
			<XIcon />
		{:else}
			<MenuIcon />
		{/if}
	</button>
	<div id="panel">
		<NavBar />
		<LanguagePicker />
	</div>
</div>

<style>
	#burguerNavBtn {
		display: none;
		background: none;
		border: none;

		:global(svg) {
			color: var(--theme-primary-colour);
		}
	}

	#container {
		position: relative;

		#panel {
			border-radius: 9px;
			display: flex;
			gap: 20px;

			:global(.language-picker) {
				margin-left: auto;
			}
		}
	}

	@media (max-width: 800px) {
		#container {
			#panel {
				position: fixed;
				align-items: center;
				display: none;
				flex-direction: column;
				left: auto;
				gap: 8rem;
				padding-top: 2rem;
				justify-content: center;
				right: 0;
				bottom: 0;
				top: 0;
				background-color: #2c4770;
				width: 50%;
				min-width: min-content;
				overflow-y: auto;

				:global(#language-picker) {
					order: 0;
				}
			}
		}

		#burguerNavBtn {
			display: flex;
			position: relative;
			z-index: 30;
		}
	}
</style>
