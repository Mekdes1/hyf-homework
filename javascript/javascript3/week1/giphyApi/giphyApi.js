/* Giphy api */

const gifButton = document.getElementById("button1");

const yourSearch = document.getElementById("gifSearch");

const showGif = document.getElementById("number");

const image = document.getElementById("img");

const search = () => {
  const key = "xj7oXM8sQY98cMeuuWPPBI3zecV6wNYo";
  const inputSearch = yourSearch.value;
  const howMany = showGif.value;

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=${howMany}&offset=0&rating=G&lang=en&q=${inputSearch}`
  )
    .then(response => response.json())
    .then(data => getGif(data));
};

const forSearch = () => {
  if (yourSearch.value == "") {
    image.innerText = "please insert value";
  } else {
    search();
  }
};

const getGif = searchItem => {
  let arrayGif = searchItem.data.map(dt => {
    return dt.images.fixed_height.url;
  });

  arrayGif.forEach(data1 => {
    const gifImg = document.createElement("img");
    gifImg.style.boxShadow = "4px 4px 4px 4px gray";
    gifImg.style.margin = "5px";
    gifImg.style.width = "350px";
    gifImg.style.height = "250px";
    gifImg.setAttribute("src", data1);
    image.appendChild(gifImg);
  });
};

gifButton.addEventListener("click", forSearch);
