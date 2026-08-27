<script>
	import LightbulbLogo from "@lucide/svelte/icons/lightbulb";

	function toggleTheme() {
		const current_theme = localStorage.getItem("jeangiraldooTheme");

		if (!current_theme) {
			localStorage.setItem("jeangiraldooTheme", "dark-mode");
		} else {
			document.body.classList.add(current_theme);
		}

		document.body.classList.toggle("light-mode");
		if (document.body.classList.contains("light-mode")) {
			localStorage.setItem("jeangiraldooTheme", "light-mode");
		} else {
			localStorage.setItem("jeangiraldooTheme", "dark-mode");
		}
	}
</script>

<button id="theme-toggle" onclick={toggleTheme}>
	<LightbulbLogo />
</button>

<style>
	#theme-toggle :global(svg) {
		width: 26px;
		height: 26px;
	}

	#theme-toggle {
		margin-left: auto;
		background: none;
		border: none;
	}
</style>
