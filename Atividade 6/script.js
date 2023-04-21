const listaGitHub = document.getElementById("listaGitHub");
const btGitHub = document.getElementById("btGitHub");

const renderizaListaGitHub = (lista, repos) => {
  lista.innerHTML = "";
  repos.forEach((repo) => {
    const itemText = document.createTextNode(repo.name);
    const listItem = document.createElement("li");
    listItem.appendChild(itemText);
    lista.appendChild(listItem);
  });
};

const getRepos = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("qtd repos = " + data.length);
      renderizaListaGitHub(listaGitHub, data);
    });
};

const handleBtGitHubClick = () => {
  getRepos("https://api.github.com/users/openai/repos");
};

btGitHub.onclick = handleBtGitHubClick;

const renderizaLista = (lista, dados) => {
    lista.innerHTML = "";
    if (dados.results) {
      dados.results.forEach((pessoa) => {
        const itemText = document.createTextNode(
          `${pessoa.name} (${pessoa.birth_year})`
        );
        const listItem = document.createElement("li");
        listItem.appendChild(itemText);
        lista.appendChild(listItem);
      });
    } else if (dados.length) {
      dados.forEach((repo) => {
        const itemText = document.createTextNode(repo.name);
        const listItem = document.createElement("li");
        listItem.appendChild(itemText);
        lista.appendChild(listItem);
      });
    }
  };
  