import 'regenerator-runtime';
// Import all of Bootstrap's JS
import {Dropdown, Offcanvas, Button, BaseComponent} from 'bootstrap';
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

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});