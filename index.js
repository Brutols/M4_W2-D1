import * as components from "./components.js";

let container = document.querySelector(".container");

let fetchPhotos = () => {
  fetch(
    "https://api.pexels.com/v1/search?query=cats&orientation=square&size=small",
    {
      headers: {
        Authorization:
          "JwgGcDpWuaQ7APH7CM6sJDan5yL2Idrm8dBCnvD0bfvi5fFdyNrBf02s",
      },
    }
  )
    .then((response) => response.json())
    .then((photos) => {
      console.log(photos.photos);
      photos.photos.forEach((item) => {
        container.innerHTML += components.createCard(
          item.src.medium,
          item.photographer,
          item.alt,
          item.photographer_url
        );
      });
    });
};

window.onload = fetchPhotos();
