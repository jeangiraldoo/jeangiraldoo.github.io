<script lang="ts">
	import { localizeHref } from "$lib/paraglide/runtime";
	import { m } from "$lib/paraglide/messages.js";
</script>

<nav id="Site main links">
	<a id="home-link" href={localizeHref("/")}>Jean Giraldo</a>
	<a href={localizeHref("/projects")}>{m.nav_projects()}</a>
	<a href={localizeHref("/blog")}>{m.nav_blog()}</a>
	<a href={localizeHref("/about")}>{m.nav_about()}</a>
	<a href={localizeHref("/contact")}>{m.nav_contact()}</a>
</nav>

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
		font-size: var(--header-font-size);
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
	}
</style>
