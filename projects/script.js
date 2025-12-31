const PROJECTS_PER_ROW = 2
const generateProjectsSection = () => {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("projects-container");

      data.forEach(({ name, stack, description, github }) => {
        const project = document.createElement("article");
        project.classList.add("project");

        const image = document.createElement("img");
		image.src = "../assets/profile.jpeg";
        const info_container = document.createElement("div");
        info_container.classList.add("project-info");

        info_container.appendChild(getHeaderDiv(name));
        info_container.appendChild(getDescriptionDiv(description));
        info_container.appendChild(getStackDiv(stack));
        info_container.appendChild(getFooterDiv(github));

		project.appendChild(image);
		project.appendChild(info_container);

        container.appendChild(project);
      });
    })
    .catch(err => console.error(err));
};

// const generateProjectsSection = () => {
//   fetch("data.json")
//     .then(response => response.json())
//     .then(data => {
//       const projectsContainer = document.getElementById("projects-container");
//
//       let row;
//       let counter = 0;
//
//       data.forEach(({ name, stack, description, github }) => {
//         // Start a new row
//         if (counter === 0) {
//           row = document.createElement("div");
//           row.classList.add("projects-row");
//         }
//
//         // Create a project
//         const project = document.createElement("div");
//         project.classList.add("project");
//
//         project.appendChild(getHeaderDiv(name));
//         project.appendChild(getStackDiv(stack));
//         project.appendChild(getDescriptionDiv(description));
//         project.appendChild(getFooterDiv(github));
//
//         row.appendChild(project);
//         counter++;
//
//         // Finish the row
//         if (counter === PROJECTS_PER_ROW) {
//           projectsContainer.appendChild(row);
//           counter = 0;
//         }
//       });
//
//       // Append leftover row
//       if (counter > 0) {
//         projectsContainer.appendChild(row);
//       }
//     })
//     .catch(error =>
//       console.error("Error loading the JSON file:", error)
//     );
// };

// const generateProjectsSection = () => {
// 	fetch("data.json")
// 	.then(response => response.json())
// 	.then(data => {
// 	const projectsContainer = document.getElementById("projects-container")
// 	var counter = 0
// 	let projectContainer = document.createElement("div")
// 	data.forEach( ({name, stack, description, github}) => {
// 		console.log(counter)
// 		if (counter === 0) {
// 			projectContainer = document.createElement("div")
// 		} else if (counter === PROJECTS_PER_ROW){
// 			counter = 0
// 			projectsContainer.appendChild(projectContainer)
// 		} else {
// 			projectContainer.classList.add("project")
//
// 			const header = getHeaderDiv(name)
// 			const stackContainer = getStackDiv(stack)
// 			const descriptionContainer = getDescriptionDiv(description)
// 			const footer = getFooterDiv(github)
//
// 			projectContainer.appendChild(header)
// 			projectContainer.appendChild(stackContainer)
// 			projectContainer.appendChild(descriptionContainer)
// 			projectContainer.appendChild(footer)
// 			projectsContainer.appendChild(projectContainer)
// 			counter = counter + 1
// 		}
// 		// const projectContainer = document.createElement("div")
// 		// projectContainer.classList.add("project")
// 		//
// 		// const header = getHeaderDiv(name)
// 		// const stackContainer = getStackDiv(stack)
// 		// const descriptionContainer = getDescriptionDiv(description)
// 		// const footer = getFooterDiv(github)
// 		//
// 		// projectContainer.appendChild(header)
// 		// projectContainer.appendChild(stackContainer)
// 		// projectContainer.appendChild(descriptionContainer)
// 		// projectContainer.appendChild(footer)
// 		// projectsContainer.appendChild(projectContainer)
// 		// counter = counter + 1
// 	})
//   })
//   .catch(error => console.error('Error loading the JSON file:', error));
// };

const getHeaderDiv = (name) => {
	// const container = document.createElement("div")
	// container.classList.add("project-header")
	const projectName = document.createElement("h2")
	projectName.innerText = name
	return projectName
	// container.appendChild(projectName)
	// return container
};

const getStackDiv = (stack) => {
	// const techStack = {
	// 				"Python": "assets/python.svg",
	// 			    "Javascript": "assets/javascript.svg",
	// 			    "React": "assets/react-native.svg",
	// 			   	"SQLite": "assets/sqlite.svg",
	// 				"Lua": "assets/lua.svg",
	// 				"PySide6": "assets/QT.svg"
	// 			}

	const container = document.createElement("div")
	container.classList.add("project-stack")
	stack.forEach( (name) => {
		// const stackInstanceContainer = document.createElement("div")
		// const techImage = document.createElement("img")
		const techName = document.createElement("p")
		techName.innerText = name
		// url = techStack[name]
		// console.log(url)
		// techImage.src = url
		// stackInstanceContainer.appendChild(techImage)
		container.appendChild(techName)
		// container.appendChild(stackInstanceContainer)
	})
	return container
};

const getDescriptionDiv = (description) => {
	// const container = document.createElement("div")
	const descriptionText = document.createElement("p")
	descriptionText.classList.add("project-description")
	descriptionText.innerText = description
	// container.appendChild(descriptionText)
	// return container
	return descriptionText
};

const getFooterDiv = (github) => {
	const container = document.createElement("footer")
	container.classList.add("project-footer")
	// const innerContainer = document.createElement("div")
	console.log(github)
	if (github) {
		const link = document.createElement("a")
		const dummy = document.createElement("a")
		dummy.textContent = "View source"
		link.textContent = "View source"
		// const linkText = document.createElement("p")
		// linkText.innerText = "View source"
		link.href = github
		dummy.href = github
		// link.appendChild(linkText)
		container.appendChild(link)
		container.appendChild(dummy)
		// innerContainer.appendChild(link)
	}

	// container.appendChild(innerContainer)
	return container
};

generateProjectsSection()
