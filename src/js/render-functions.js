import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
export function createGallery(images) {
  if (images.length <= 1) {
    hideLoader();
    iziToast.show({
      title: 'Oops!',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#fff0f6',
      titleColor: '#ff4d79',
      messageColor: '#ff80a0',
      progressBarColor: '#ffb3c6',
    });
    return;
  }
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => createImage(image)).join('');
  hideLoader();
  gallery.innerHTML = markup;
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  });
  lightbox.refresh();
}
export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
export function showLoader() {
  const loader = document.querySelector('.loader');
  const classes = loader.classList;
  classes.toggle(`invisible`);
}
export function hideLoader() {
  const loader = document.querySelector('.loader');
  const classes = loader.classList;
  classes.toggle(`invisible`);
}
function createImage(image) {
  return `<li><div class="image-box">
  <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}"></a>
  <div class="image-description">
    <p class="image-stats">Downloads: ${image.downloads}</p>
    <p class="image-stats">Likes: ${image.likes}</p>
    <p class="image-stats">Views: ${image.views}</p>
    <p class="image-stats">Comments: ${image.comments}</p>
  </div>
</div></li>`;
}
