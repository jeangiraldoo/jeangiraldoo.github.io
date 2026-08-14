<svelte:head>
	<title>Jean Giraldo</title>
</svelte:head>

<main id="personal-info">
  <img src="/images/profile.jpeg" />
  <section id="about">
	<p>
	  Hi there! I'm particularly interested in low level concepts and
	  theory, the terminal, and building cool things using code.<br /><br />

	  Outside of CS I enjoy reading books, some gaming (mostly Halo and
	  Titanfall), playing chess, teaching when the chance arises, and
	  spending time with friends and family.<br /><br />

	  Don't miss out on my projects!
	</p>
  </section>
</main>

<style>
img {
  width: 250px;
  height: 250px;
  border-radius: 20px;
}

p {
  color: var(--text-colour);
  text-align: left;
  max-width: 80ch;
  margin: 30px auto;
}

#personal-info {
  text-align: center;
}

@media (max-width: 768px) {
  main {
    width: 90%;
  }
}
</style>
