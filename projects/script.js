fetch("data.json").then(res => res.json()).then(data => {
	const container = document.getElementById("projects-container");

	data.forEach(({ name, image_path, stack, description, source_code }) => {
		const project = document.createElement("article");
		project.classList.add("project");

		const image = document.createElement("img");
		image.src = image_path;
		const info_container = document.createElement("div");
		info_container.classList.add("project-info");

		info_container.appendChild(createProjectHeader(name));
		info_container.appendChild(createProjectDescription(description));
		info_container.appendChild(createProjectStack(stack));
		info_container.appendChild(getFooterDiv(source_code));

		project.appendChild(image);
		project.appendChild(info_container);

		container.appendChild(project);
	});
}).catch(err => console.error(err));

function createProjectHeader(name) {
	const projectName = document.createElement("h2")
	projectName.innerText = name
	return projectName
};

function createProjectStack(stack) {
	const container = document.createElement("div")
	container.classList.add("project-stack")
	stack.forEach( (name) => {
		const techName = document.createElement("p")
		techName.innerText = name
		container.appendChild(techName)
	})
	return container
};

function createProjectDescription(description) {
	const descriptionText = document.createElement("p")
	descriptionText.classList.add("project-description")
	descriptionText.innerText = description
	return descriptionText
};

function getFooterDiv(source_code) {
	const container = document.createElement("footer")
	container.classList.add("project-footer")

	if (source_code) {
		const link = document.createElement("a")
		link.textContent = "Code"
		link.href = source_code
		container.appendChild(link)
	}

	return container
};
