import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
const has = require('has-values');
const isEmpty = val => !has(val);
const hasValue = val => has(val) && val !== null;

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = hasValue(routes[url]) ? routes[url] : routes["/404"];
    const changeLinkActive = async () => {
      const activeLinkBef = document.querySelector(`a.nav-link.active`);
      const activeLinkAft = url === "/" ? document.querySelector(`a.nav-link[href="#"]`) : document.querySelector(`a.nav-link[href="#${url}"]`);
      if (hasValue(activeLinkBef)) {
        activeLinkBef.classList.remove("active");
      }
      if (hasValue(activeLinkAft)) {
        activeLinkAft.classList.add("active");
      }
    }
    this._content.innerHTML = await page.render();
    await page.afterRender();
    await changeLinkActive();
  }
};

export default App;