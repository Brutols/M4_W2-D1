export let createCard = (
  src,
  title,
  desc,
  link
) => `<div class="card col-3" style="width: 21rem;">
<img src="${src}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text text-truncate">${desc}</p>
  <a href="${link}" class="btn btn-primary text-truncate" target="_blank">More from ${title}</a>
</div>
</div>`;
