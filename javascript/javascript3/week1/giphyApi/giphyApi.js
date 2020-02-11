/* Giphy api */

const gifButton = document.getElementById("button1");

const yourSearch = document.getElementById("gifSearch");

const showGif = document.getElementById("number");

const image = document.getElementById("img");

const search = () => {
  const key = "xj7oXM8sQY98cMeuuWPPBI3zecV6wNYo";
  const inputSearch = yourSearh.value;
  const howMany = showGif.value;

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=${howMany}&offset=0&rating=G&lang=en&q=${inputSearch}`
  )
    .then(response => response.json())
    .then(data => {
      let newArray = data.data.map(dt => {
        return dt.images.fixed_height.url;
      });

      newArray.forEach(data1 => {
        const gifImg = document.createElement("img");
        gifImg.style.boxShadow = "4px 4px 4px 4px gray";
        gifImg.style.margin = "5px";
        gifImg.style.width = "350px";
        gifImg.style.height = "250px";
        gifImg.setAttribute("src", data1);
        image.appendChild(gifImg);
      });
    });
};

const forSearch = () => {
  if (yourSearh.value == "") {
    image.innerText = "please insert value";
  } else {
    search();
  }
};

gifButton.addEventListener("click", forSearch);
