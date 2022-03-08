const projectsContainer = document.querySelector(".projects-content");
let projectsHolder = [];

function projectCard(element, index) {
  return (
    <div className="card" key={index}>
      <div className="card-image">
        <div className="image-placeholder">
          <a className="project-link" href={element.Project.link}>
            <i className="fa fa-plus fa-3x m-inline:1"></i>
          </a>
          <a className="project-source" href={element.Project["source code"]}>
            <i className="fa fa-link fa-3x m-inline:1"></i>
          </a>
          <a className="project-image">
            <i className="fa fa-link fa-3x m-inline:1"></i>
          </a>
        </div>
        <img
          src={`./assets/images/projects/${element.Project.image}`}
          alt={element.Project.alt}
        />
      </div>
      <div className="card-info">
        <h3>
          <a href="#" target="_blank">
            {element.Project.name}
          </a>
        </h3>
        <p>{element.Project.desc}</p>
        <button className="button secondary display-project">show more</button>
      </div>
    </div>
  );
}

fetch("./assets/json/projects.json")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    for (let i = 0; i < response.length; i++) {
      projectsHolder.push(projectCard(response[i], i));
    }

    ReactDOM.render(<Projects />, projectsContainer);
  })
  .catch((reject) => {
    console.error(reject);
  });

class Projects extends React.Component {
  render() {
    return <React.Fragment>{projectsHolder}</React.Fragment>;
  }
}
