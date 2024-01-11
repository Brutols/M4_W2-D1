let container = document.querySelector(".container");

export let createCard = (src, title, desc, link) => `<div class="card col-3">
<img src="${src}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text text-truncate">${desc}</p>
  <a href="${link}" class="btn btn-primary text-truncate" target="_blank">More from ${title}</a>
</div>
</div>`;

export const cardAppendChild = (src, title, desc, link) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card", "col-3");

  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img-top");
  cardImg.setAttribute("src", src);

  cardWrapper.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  cardWrapper.appendChild(cardBody);

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;

  cardBody.appendChild(cardTitle);

  const cardDesc = document.createElement("p");
  cardDesc.classList.add("card-text", "text-truncate");
  cardDesc.textContent = desc;

  cardBody.appendChild(cardDesc);

  const cardBtn = document.createElement("a");
  cardBtn.classList.add("btn", "btn-primary", "text-truncate");
  cardBtn.setAttribute("href", link);
  cardBtn.setAttribute("target", "_blank");
  cardBtn.textContent = `More from ${title}`;

  cardBody.appendChild(cardBtn);

  container.appendChild(cardWrapper);
};
