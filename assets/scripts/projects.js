const projectsContainer = document.querySelector(".projects-content");

fetch("../json/projects.json")
  .then((response) => {
    console.log(response.json());
  })
  .catch((reject) => {
    console.log(reject);
  });

// - for (let i = 0; i < projects.length; i++)
// .card
//   img(src="./assets/images/projects/" + projects[i].Project[0], alt=projects[i].Project[2])
//   .info
//     h3: a(href=projects[i].Project[1], target='_blank')= projects[i].Project[2]
//     p My creative ability is very difficult to measure because it can manifest in so many surprises.
//     button.button.info show more
