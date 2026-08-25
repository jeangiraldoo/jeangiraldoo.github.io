<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import { m } from "$lib/paraglide/messages.js";
	import lightbulbLogo from "$lib/icons/lightbulb.svg?raw";
	import LanguagePicker from "$lib/components/LanguagePicker.svelte";

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

<header>
	<nav id="Site main links">
		<a id="home-link" href={localizeHref("/")}>Jean Giraldo</a>
		<a href={localizeHref("/projects")}>{m.nav_projects()}</a>
		<a href={localizeHref("/blog")}>{m.nav_blog()}</a>
		<a href={localizeHref("/about")}>{m.nav_about()}</a>
		<a href={localizeHref("/contact")}>{m.nav_contact()}</a>
	</nav>
	<button id="theme-toggle" onclick={toggleTheme}>
		{@html lightbulbLogo}
	</button>
	<LanguagePicker />
</header>

<style>
	nav {
		display: flex;
		gap: 20px;
		padding: 10px;
	}

	nav a {
		display: flex;
		align-items: center;
		color: white;
		font-size: 1.25rem;
	}

	nav a:hover {
		color: var(--theme-secondary-colour);
	}

	#home-link {
		color: var(--theme-primary-colour);
		font-size: 1.5rem;
	}

	:global(svg) {
		width: 22px;
		height: 22px;
		color: white;
	}

	#theme-toggle svg {
		width: 26px;
		height: 26px;
	}

	#theme-toggle {
		margin-left: auto;
		background: none;
		border: none;
	}

	header {
		display: flex;
		padding: 0 20px;
		align-items: center;
		gap: 30px;
	}

	@media (max-width: 768px) {
		nav a {
			font-size: 1rem;
		}

		#home-link {
			font-size: 1.1rem;
		}

		nav {
			gap: 12px;
		}

		header {
			padding: 0 10px;
			gap: 15px;
		}
	}
</style>
