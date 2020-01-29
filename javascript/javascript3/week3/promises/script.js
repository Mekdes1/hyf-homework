const users = ["krithi-kondana", "Mekdes1", "afrouzhakim"];

const repo = user => {
  const promisIs = fetch(
    `https://api.github.com/search/repositories?q=user:${user}`
  )
    .then(response => response.json())
    .then(data => {
      return data.items;
    });
  return promisIs;
};

const renderData = () => {
  Promise.all(users.map(item => repo(item))).then(data =>
    data.forEach(item => renderAllData(item))
  );
};

renderData();

const renderAllData = item => {
  const parentUl = document.getElementById("repoList");
  const listItem = document.createElement("li");
  const parentUl2 = document.createElement("ul");

  listItem.innerText = `${item[0].owner.login}'s repositories :  `;
  parentUl.appendChild(listItem);
  listItem.appendChild(parentUl2);

  item.forEach(repoItem => {
    const repoName = document.createElement("li");
    repoName.innerText = ` ${repoItem.name} :   ${repoItem.url}  `;
    parentUl2.appendChild(repoName);
  });
};
