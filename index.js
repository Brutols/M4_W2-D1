let fetchPhotos = () => {
    fetch("https://api.pexels.com/v1/search?query=cats&orientation=square&size=small", {
        headers: {
            Authorization: "JwgGcDpWuaQ7APH7CM6sJDan5yL2Idrm8dBCnvD0bfvi5fFdyNrBf02s"
        }
    })
    .then((response) => response.json())
    .then((photos) => {
        console.log(photos.photos)
        let container = document.querySelector(".container")
        let createCard = (src, title, desc, link) => `<div class="card col-3" style="width: 21rem;">
        <img src="${src}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text text-truncate">${desc}</p>
          <a href="${link}" class="btn btn-primary text-truncate" target="_blank">More from ${title}</a>
        </div>
      </div>`
        photos.photos.forEach(item => {
            container.innerHTML += createCard(item.src.medium, item.photographer, item.alt, item.photographer_url)
        });
    })
}

window.onload = fetchPhotos()