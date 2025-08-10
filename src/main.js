import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
    gallery: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const userValue = refs.form.elements.searchtext.value;
  if (userValue.trim() === '') {
   iziToast.show({
     title: 'Oi!',
     message:
       'Please enter a valid search option.',
     backgroundColor: '#fff0f6',
     titleColor: '#ff4d79',
     messageColor: '#ff80a0',
     progressBarColor: '#ffb3c6',
   });
    e.target.reset();
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(userValue)
    .then(res => createGallery(res.hits))
    .catch(err => console.log(err));
  e.target.reset();
}
