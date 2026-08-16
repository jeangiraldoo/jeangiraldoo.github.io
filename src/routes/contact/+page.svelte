<script>
	import linkedinLogo from '$lib/icons/linkedin.svg?raw';
	import githubLogo from '$lib/icons/github.svg?raw';
	import upworkLogo from "$lib/icons/upwork.svg?raw";
	import emailLogo from "$lib/icons/email.svg?raw";
</script>

<main>
	<h1>Let's connect!</h1>
	<div id="description">
	<p>
		I'm always interested in meeting other <span>developers</span> and <span>people</span>,
		discovering <span>interesting projects</span>, and exploring <span>new ideas.</span>
	</p>
	<p>
		If you'd like to <span>get in touch</span> or see what I'm working on, you can <span>find me</span> here.
	</p>
	</div>
	<nav aria-label="Social links">
		<a href="mailto:jeangiraldoo@gmail.com">
			{@html emailLogo}
			<span>Email</span>
		</a>
		<a href="https://www.linkedin.com/in/jeanngiraldo">
			{@html linkedinLogo}
			<span>Linkedin</span>
		</a>
		<a href="https://github.com/jeangiraldoo">
			{@html githubLogo}
			<span>GitHub</span>
		</a>
		<a href="https://www.upwork.com/freelancers/~010da443f008f8af61">
			{@html upworkLogo}
			<span>Upwork</span>
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
	color: var(--primary-colour);
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

nav a, a:visited {
	color: inherit;
}

nav a:hover :global(svg), nav a:hover span {
	color: var(--primary-colour);
}

#description {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

#description p {
	margin: 0;
	color: var(--text-colour);
	font-size: 1.125rem;
}

#description p span {
	color: hsl(166, 92, 52);
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
