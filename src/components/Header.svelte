<script>
import linkedinLogo from '$lib/icons/linkedin.svg?raw';
import githubLogo from '$lib/icons/github.svg?raw';
import lightbulbLogo from '$lib/icons/lightbulb.svg?raw';

function toggleTheme() {
	const current_theme = localStorage.getItem("jeangiraldooTheme")

	if (!current_theme) {
		localStorage.setItem("jeangiraldooTheme", "dark-mode")
	} else {
		document.body.classList.add(current_theme);
	}

	document.body.classList.toggle("light-mode");
	if (document.body.classList.contains("light-mode")) {
		localStorage.setItem("jeangiraldooTheme", "light-mode")
	} else {
		localStorage.setItem("jeangiraldooTheme", "dark-mode")
	}
}
</script>

<header>
  <nav id="Site main links">
    <a id="home-link" href="/">Jean Giraldo</a>
    <a href="/projects">Projects</a>
    <a href="/blog">Blog</a>
  </nav>
  <button id="theme-toggle" onclick={toggleTheme}>
		{@html lightbulbLogo}
  </button>
  <nav id="social-links">
    <a href="https://github.com/jeangiraldoo">
		{@html githubLogo}
    </a>
    <a href="https://www.linkedin.com/in/jeanngiraldo">
		{@html linkedinLogo}
    </a>
  </nav>
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
  font-size: 1rem;
}

#home-link {
  color: var(--primary-colour);
  font-size: 1.24rem;
}

#social-links {
  display: flex;
  gap: 10px;
  padding: 0;
  align-items: center;
  flex-shrink: 0;
}

header svg, :global(svg) {
	width: 22px;
	height: 22px;
	color: white;
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
  margin-bottom: 30px;
}
</style>

