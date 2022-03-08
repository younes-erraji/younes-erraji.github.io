const skillsContainer = document.querySelector(
  ".skills#skills .skills-container"
);
let skillsHolder = [];

function SkillCard(element, index) {
  return (
    <div className="skills-data" key={index}>
      <div className="skills-names">
        <img
          className="skill-icon"
          src={`./assets/icons/skills/${element.skill.icon}`}
          alt=""
        />
        <span className="skill-name">{element.skill.name}</span>
      </div>
      <div
        className="skill-bar"
        style={{ width: element.skill.percentage }}
      ></div>
      <div>
        <span className="skills-percentage">{element.skill.percentage}</span>
      </div>
    </div>
  );
}

fetch("./assets/json/skills.json")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    for (let i = 0; i < response.length; i++) {
      skillsHolder.push(SkillCard(response[i], i));
    }

    ReactDOM.render(<SkillsCards />, skillsContainer);
  })
  .catch((reject) => {
    console.error(reject);
  });

class SkillsCards extends React.Component {
  render() {
    return <React.Fragment>{skillsHolder}</React.Fragment>;
  }
}
