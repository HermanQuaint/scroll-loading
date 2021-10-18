'use strict';

const loading = document.querySelector('.loading');
const html = document.querySelector('.page');

let heightPage = document.documentElement.scrollHeight;
let widthPage = document.documentElement.scrollWidth;
const space = window.innerHeight - loading.offsetTop;
const widthLoading = widthPage;

const loadingScroll = () => {
  let percent = (html.scrollTop + space) * 100 / heightPage;
  loading.style.width = `${widthLoading * percent / 100}px`;
};
loadingScroll();
document.addEventListener('scroll', loadingScroll);
