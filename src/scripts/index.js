import 'regenerator-runtime';
// Import all of Bootstrap's JS
import {Dropdown, Offcanvas, Button, BaseComponent, Tooltip} from 'bootstrap';
import {ScrollAnime} from './utils/utilsPenting';
import App from './views/app';

// Import font-awesome
import '@fortawesome/fontawesome-free/js/all.min';

// Import our custom CSS
import '../styles/styles.scss';
import '../styles/font.css';
import '../styles/styles.css';

import AskaraLogo from '../images/logo_askara/origin/logo_AI.png';
import AskaraLogo2 from '../images/logo_askara/png/askara_x128.png';

const navbarAskara = document.getElementById('navbarAskara');
const navbarAskara2 = document.getElementById('navbarAskara2');
navbarAskara.src = AskaraLogo;
navbarAskara2.src = AskaraLogo;

const footImg = document.querySelector('#footer img');
footImg.src = AskaraLogo2;

const app = new App({
  content: document.querySelector('#mainContent'),
});

const BackToTop = document.getElementById("btn-back-to-top");
const checkBackToTop = () => {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    BackToTop.style.display = "block";
  } else {
    BackToTop.style.display = "none";
  }
}
const scrollBackToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
BackToTop.addEventListener("click", scrollBackToTop);
window.addEventListener('scroll', checkBackToTop);

const RunningScroll = async () => {
  const scrollElements = document.querySelectorAll('.js-scroll');
  const scrollRun = new ScrollAnime();
  window.removeEventListener('scroll', () => {
    scrollRun.handleScrollAnimation(scrollElements);
  }, false);
  window.addEventListener('scroll', () => {
    scrollRun.handleScrollAnimation(scrollElements);
  }, false);
  scrollRun.handleScrollAnimation(scrollElements);
}

window.addEventListener('hashchange', async () => {
  await app.renderPage();
  await scrollBackToTop();
  await RunningScroll();
});
window.addEventListener('load', async () => {
  await app.renderPage();
  await RunningScroll();
});

const clickFunc = () => {
  const ElemCanvas = document.querySelector('#offcanvasNavbar');
  const BsCanvas = Offcanvas.getInstance(ElemCanvas);
  if (ElemCanvas.classList.contains('show')) {
    BsCanvas.hide();
  }
}
const NavLink = document.querySelectorAll('.nav-link');
NavLink.forEach(function(elem) {
  elem.addEventListener('click', clickFunc);
});

// import toDataURL from 'to-data-url';
// const srcImg = 'https://avatars0.githubusercontent.com/u/7076521?v=2&s=84';
// toDataURL(srcImg, {
//     callback: function (err, data) {
//         if (!err) console.log(data);
//     }
// });