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

<button
	class="ml-auto order-2 max-md:order-1 bg-transparent border-none [&_svg]:size-7 cursor-pointer"
	onclick={toggleTheme}
>
	<LightbulbLogo />
</button>
