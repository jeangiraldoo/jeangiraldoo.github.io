<main>
	<h1>About</h1>
	<section id="background-section">
		<p>
			Hey! I'm Jean, a <span>Software Developer</span> and Computer Science student based in Colombia.
		</p>
		<p>
			I've always been interested in technology; as a kid I would tinker with every device I could get
			my hands on at home. Most did not survive. One time I put an <a href="https://en.wikipedia.org/wiki/Arepa">arepa</a> inside a DVD; I'm not exactly
			sure what happened to it afterwards, but my parents weren't happy.
		</p>
		<p>
			My first contact with programming was at secondary school, in the "Informatics" class, through <a href="https://scratch.mit.edu">Scratch</a>,
			alongside some basic HTML and CSS later on. This basic understanding of what was possible with computers,
			coupled with my love for videogames, led me to enroll in a Multimedia Engineering degree right after graduation,
			and later on switch to Systems Engineering (the equivalent of Computer Science in Colombia).
		</p>
		<p>
			From then on, I've focused on building software that solves real problems for myself and others,
			while exploring Computer Science on my own. Feel free to take a look at
			<a href="/projects">some of the things I've built</a>, you might find something that makes your life easier!
		</p>
	
	</section>

	<section>
		<h2>Education</h2>
		<ul id="education-container">
			<li class="education-instance">
				<h3>Bachelor's degree in Multimedia Engineering</h3>
				<h3>2020-2023</h3>
				<h3>Universidad Autónoma de Occidente</h3>
				<p>
					I got into this degree out of love for <span>videogames</span> and <span>video editing</span>,
					and in it my love for <span>coding</span> was born.
				</p>
				<p>
					Due to financial constraints, I had no option but to drop out (it's a private university),
					but I managed to finish the first half of the degree before moving onto <span>Universidad del Valle</span>
					to study <span>Computer Science</span>.
				</p>
			</li>
			<li class="education-instance">
				<h3>Bachelor's degree in Systems Engineering (Computer Science)</h3>
				<h3>2024-2028</h3>
				<h3>Universidad del Valle</h3>
			</li>
		</ul>
	</section>

	<section>
		<h2>Languages</h2>
		<ul id="languages-container">
			<li>
				<h3>Spanish</h3>
				<p>Native</p>
			</li>
			<li>
				<h3>English</h3>
				<p>C1</p>
			</li>
			<li>
				<h3>Portuguese</h3>
				<p>A2. Eu falo portunhol kkkk</p>
			</li>
		</ul>
	</section>

	<section>
		<h2>Hobbies</h2>
		<ul id="hobbies-container">
			<li>
				<h3>Programming</h3>
				<p>
					I'm particularly interested in low level concepts and theory,
					and building cool things across many domains such as <span>games</span>,
					<span>websites</span>, <span>CLI</span> tools and more!
				</p>
			</li>
			<li>
				<h3>Reading</h3>
				<p>
					I enjoy reading both <span>fiction</span> and <span>non-fiction</span>, across a vast array of genres;
					for fiction I love <span>classic literature</span> and <span>Hard Sci-Fi</span>.
					At the moment my favourite book series is <span>The Three Body Problem</span>!
				</p>
			</li>
			<li>
				<h3>Games</h3>
				<p>
					I love <span>chess</span>, cozy indie games and AAA games like <span>Halo</span>,
					<span>Titanfall</span> and <span>Battlefield</span>.
				</p>
			</li>
		</ul>
	</section>
</main>

<style>
main {
	display: flex;
	flex-direction: column;
	gap: 50px;
	margin: 40px auto;
}

h1,
h2 {
	color: var(--theme-primary-colour);
}

section {
	display: flex;
	flex-direction: column;
	gap: 40px;
}

section p {
	color: var(--theme-text-colour);
	margin: 0;
}

section ul {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 1rem;
	list-style: none;
	margin: 0;
	padding: 0;
}

section ul > li {
	padding: 20px;
	border: 1px solid var(--card-accent);
	border-radius: 10px;
}

section ul h3 {
	color: var(--card-accent);
	margin: 0 0 10px 0;
}

section ul p {
	margin: 0;
	text-align: left;
	color: var(--theme-text-colour);
}

section ul p span {
	color: var(--card-accent);
}

#education-container {
	--card-accent: var(--theme-secondary-colour);
}

#languages-container {
	--card-accent: var(--theme-quaternary-colour);
}

#hobbies-container {
	--card-accent: var(--theme-tertiary-colour);
}

.education-instance h3 {
	margin: 0;
	color: var(--theme-text-colour);
}

.education-instance h3:first-child {
	color: var(--card-accent);
}

.education-instance h3:nth-child(2) {
	color: var(--theme-quaternary-colour);
}

.education-instance p {
	margin: 10px 0 0 0;
}

#background-section a {
	color: var(--theme-primary-colour);
}

#background-section p {
	text-align: left;
}

@media (max-width: 768px) {
	main {
		width: 90%;
	}
}
</style>
