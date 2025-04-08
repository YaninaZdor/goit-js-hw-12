export function imageTemplate(item) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = item;

  return `<li class="photo-card">
  <a class="gallery-link" href="${largeImageURL}">
  <img class="gallery-image" src="${webformatURL}" alt="${tags}"/></a><div class="info"><div class="block">
  <h2 class="tittle">Likes</h2>
  <p class="amount">${likes}</p>
</div>
<div class="block">
  <h2 class="tittle">Views</h2>
  <p class="amount">${views}</p>
</div>
<div class="block">
  <h2 class="tittle">Comments</h2>
  <p class="amount">${comments}</p>
</div>
<div class="block">
  <h2 class="tittle">Downloads</h2>
  <p class="amount">${downloads}</p>
</div></div></li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}
