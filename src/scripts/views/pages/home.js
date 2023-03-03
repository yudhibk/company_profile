// import Image
// import dummy from '../../../images/dummy.jpg';
import {UtilsPenting, MediaQuery} from '../../utils/utilsPenting';
import '../../../styles/home.css';

// Import splide
// import '@splidejs/splide/css';
// import Splide from '@splidejs/splide';

import MainProductShared from './compo-shared/main-product';
import TopProductShared from './compo-shared/top-product';

const home = {
    async render() {
      const MainProduct = await MainProductShared.render('');
      const TopProduct = await TopProductShared.render();
      return `
        <div id="imageAskara" class="z-n1"></div>
        <div id="imageAskara-zone" class="opacity-0 w-100"></div>
        <div id="summaryComp" class="bg-white py-5 position-relative">
          <div class="d-block position-relative">
            <div id="blokBiru1" class="position-absolute"></div>
            <div id="spaceSumDiv1" class="position-relative container px-lg-5">
              <div id="spaceSum" class="d-inline-block align-middle rounded px-3 px-sm-4 pt-sm-3 bg-white w-100 position-relative js-scroll">
                <h5 id="spaceSumStory" class="text-askara m-0 pt-3 px-sm-1 text-secondary js-highlight">Our Story</h5>
                <h2 id="spaceSumTitle" class="text-askara m-0 pt-3 px-sm-1 text-secondary js-highlight">PT. Askara Internal</h2>
                <p id="spaceSumWord" class="m-0 text-secondary d-block pt-3 px-sm-1 text-secondary js-highlight"></p>
                <a href="#/about-us" class="btn btn-primary mt-3 ms-sm-1">Read More</a>
              </div>
            </div>
          </div>
          <div class="d-block position-relative">
            <div id="blokBiru2" class="position-absolute"></div>
            <div id="blokAbu" class="position-absolute"></div>
            <div id="spaceSumDiv2" class="position-relative container px-lg-5">
              <div id="S4Comp" class="w-100 h-100 row m-0 pt-3 px-2 position-relative">
                <div id="blokAbu2" class="position-absolute"></div>
                <div id="blokPutih" class="position-absolute"></div>
                <div id="S4Symbol" class="position-absolute text-white">4S</div>
                <div class="col-6 col-md-3 px-md-2 z-2 js-scroll" id="s4Speed">
                  <div class="col-s4 rounded bg-white h-100 w-100">
                    <h5 class="m-0 S4CompTitle text-secondary p-3 js-highlight" id="s4SpeedTitle">Speed</h5>
                    <p class="S4CompText text-secondary p-3 js-highlight" id="s4SpeedWord">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit
                    </p>
                  </div>
                </div>
                <div class="col-6 col-md-3 px-md-2 z-2 js-scroll" id="s4Skill">
                  <div class="col-s4 rounded bg-white h-100 w-100">
                    <h5 class="m-0 S4CompTitle text-secondary p-3 js-highlight" id="s4SkillTitle">Skill</h5>
                    <p class="S4CompText text-secondary p-3 js-highlight" id="s4SkillWord">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit
                    </p>
                  </div>
                </div>
                <div class="col-6 col-md-3 px-md-2 pt-3 pt-md-0 z-2 js-scroll" id="s4Smart">
                  <div class="col-s4 rounded bg-white h-100 w-100">
                    <h5 class="m-0 S4CompTitle text-secondary p-3 js-highlight" id="s4SmartTitle">Smart</h5>
                    <p class="S4CompText text-secondary p-3 js-highlight" id="s4SmartWord">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit
                    </p>
                  </div>
                </div>
                <div class="col-6 col-md-3 px-md-2 pt-3 pt-md-0 z-2 js-scroll" id="s4Smile">
                  <div class="col-s4 rounded bg-white h-100 w-100">
                    <h5 class="m-0 S4CompTitle text-secondary p-3 js-highlight" id="s4SmileTitle">Smile</h5>
                    <p class="S4CompText text-secondary p-3 js-highlight" id="s4SmileWord">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ${MainProduct}
        <div class="w-100 bg-white pt-2 pb-3 js-scroll">
          ${TopProduct}
        </div>
        <div class="w-100 bg-white py-5 px-3 text-center">
          <div class="d-inline-block mt-2 py-3 px-3 px-md-4 py-md-5 px-md-5 bg-white text-center rounded border js-scroll" id="businessWS">
            <h2 class="mb-4" id="bussinessWSTitle">Begin Business Journey With Us!</h2>
            <a href="#/contact" class="btn btn-primary fw-bold d-inline-block">
              <i class="fa-solid fa-phone d-inline-block align-middle pe-1"></i>
              <span>CONTACT US</span>
            </a>
          </div>
        </div>
      `;
    },
   
    async afterRender() {

      await MainProductShared.afterRender();
      await TopProductShared.afterRender();
      // Text Limit
      const spaceSumWord = document.querySelector('#spaceSumWord');
      const textSummary = `ASKARA Group established in 1995, a group company that focuses in industrial segment, equipment procurement &amp; hospitality. One stop solution for automotive components, mechanical, electrical services, technical support, construction &amp; landscaping for Office and Industry.`;
      let finalTextSummary = '';
      // End text limit

      const finalTextWin576 = () => {
        finalTextSummary = UtilsPenting.truncateWithEllipses(UtilsPenting.decodeEntities(textSummary), 220);
        spaceSumWord.innerHTML = finalTextSummary;
      }
      const finalTextWin768 = () => {
        finalTextSummary = UtilsPenting.truncateWithEllipses(UtilsPenting.decodeEntities(textSummary), 500);
        spaceSumWord.innerHTML = finalTextSummary;
      }
      const finalTextWinDef = () => {
        spaceSumWord.innerHTML = textSummary;
      }

      const setMedia = new MediaQuery('about-us');
      setMedia.FuncXS = finalTextWin576;
      setMedia.FuncSM = finalTextWin768;
      setMedia.FuncMD = finalTextWinDef;
      await setMedia.runMedia();

    },
  };
   
export default home;