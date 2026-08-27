<script>
	import { m } from "$lib/paraglide/messages.js";
	import RichMessage from "$lib/components/RichMessage.svelte";

	import EmailLogo from "@lucide/svelte/icons/mail";
	import { SiGithub, SiUpwork } from "@icons-pack/svelte-simple-icons";
	import linkedinLogo from "$lib/icons/linkedin.svg?raw";
</script>

<main>
	<h1>{m.contact_title()}</h1>
	<div id="description">
		<p><RichMessage message={m.contact_intro} /></p>
		<p><RichMessage message={m.contact_find_me} /></p>
	</div>
	<nav aria-label={m.social_links_aria()}>
		<a href="mailto:jeangiraldoo@gmail.com">
			<EmailLogo />
			<span>{m.email_label()}</span>
		</a>
		<a href="https://www.linkedin.com/in/jeanngiraldo">
			{@html linkedinLogo}
			<span>{m.linkedin_label()}</span>
		</a>
		<a href="https://github.com/jeangiraldoo">
			<SiGithub />
			<span>{m.github_label()}</span>
		</a>
		<a href="https://www.upwork.com/freelancers/~010da443f008f8af61">
			<SiUpwork />
			<span>{m.upwork_label()}</span>
		</a>
	</nav>
</main>

<style>
	main {
		min-height: 100dvh;
		width: 70%;
		margin: 0 auto;
		padding-top: var(--content-offset, 24px);
		box-sizing: border-box;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 40px;
	}

	@supports not (height: 100dvh) {
		main {
			min-height: 100vh;
		}
	}

	h1 {
		color: var(--theme-primary-colour);
		text-align: center;
	}

	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 50px;
	}

	nav a {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 1.125rem;
	}

	nav a span {
		color: white;
	}

	nav a,
	a:visited {
		color: inherit;
	}

	nav a:hover :global(svg),
	nav a:hover span {
		color: var(--theme-primary-colour);
	}

	#description {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	#description p {
		margin: 0;
		color: var(--theme-text-colour);
		font-size: 1.125rem;
	}

	#description p :global(span) {
		color: var(--theme-secondary-colour);
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
		}

		nav {
			flex-wrap: wrap;
			gap: 20px;
		}
	}
</style>
