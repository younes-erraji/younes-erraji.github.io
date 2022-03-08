const resourcesContainer = document.querySelector(".resources-content ul");
let resourcesHolder = [];

function resourceCard(element, index) {
  return (
    <li key={index}>
      <a href="#">
        <img src={`./assets/images/resources/${element.resource.name}.svg`} />
      </a>
    </li>
  );
}

fetch("./assets/json/resources.json")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    for (let i = 0; i < response.length; i++) {
      resourcesHolder.push(resourceCard(response[i], i));
    }

    ReactDOM.render(<Resources />, resourcesContainer);
  })
  .catch((reject) => {
    console.error(reject);
  });

class Resources extends React.Component {
  render() {
    return <React.Fragment>{resourcesHolder}</React.Fragment>;
  }
}
