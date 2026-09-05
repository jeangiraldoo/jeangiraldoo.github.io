<script>
	import { m } from "$lib/paraglide/messages.js";
	import RichMessage from "$lib/components/RichMessage.svelte";
	import Title from "$lib/components/Title.svelte";

	import EmailLogo from "@lucide/svelte/icons/mail";
	import { SiGithub, SiUpwork } from "@icons-pack/svelte-simple-icons";
	import linkedinLogo from "$lib/icons/linkedin.svg?raw";
</script>

<main>
	<Title
		title={m.contact_title()}
		level={1}
		size="2.5rem"
		colour="var(--theme-primary-colour)"
	/>
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

		#description {
			display: flex;
			flex-direction: column;
			gap: 20px;

			p {
				margin: 0;
				color: var(--theme-text-colour);
				font-size: 1rem;

				& :global(span) {
					color: var(--theme-secondary-colour);
				}
			}
		}

		nav {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 50px;

			a {
				display: flex;
				align-items: center;
				gap: 8px;
				font-size: 1rem;
				transition: transform 0.2s;

				:global(svg),
				span {
					color: white;
					transition: color 0.3s;
				}

				&:visited {
					color: inherit;
				}

				&:hover {
					transform: scale(1.07, 1.07);

					:global(svg),
					span {
						color: var(--theme-primary-colour);
					}
				}
			}
		}
	}

	@supports not (height: 100dvh) {
		main {
			min-height: 100vh;
		}
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
		}

		:global(.title h1) {
			font-size: 1.75rem;
		}

		nav {
			flex-wrap: wrap;
			gap: 20px;
		}
	}
</style>
