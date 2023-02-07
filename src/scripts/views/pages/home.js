// import Image
import dummy from '../../../images/dummy.jpg';
import UtilsPenting from '../../utils/utilsPenting';
import '../../../styles/home.css';

// Import splide
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

import MainProductShared from './compo-shared/main-product';

const home = {
    async render() {
      const TopClient = `
        <div class="col-12 py-5 px-0">
          <div class="d-block" id="sumClientDiv">
            <div class="container px-0 px-lg-5">
              <section class="splide" aria-labelledby="carousel-heading" id="splide-client">
                <h2 id="carousel-heading" class="m-0 pb-3">Our Client</h2>
                <div class="splide__track">
                  <ul class="splide__list">
                    <li class="splide__slide"><img src="" alt="slide00" class="slide00"></li>
                    <li class="splide__slide"><img src="" alt="slide00" class="slide00"></li>
                    <li class="splide__slide"><img src="" alt="slide00" class="slide00"></li>
                    <li class="splide__slide"><img src="" alt="slide00" class="slide00"></li>
                    <li class="splide__slide"><img src="" alt="slide00" class="slide00"></li>
                    <li class="splide__slide"><img src="" alt="slide00" class="slide00"></li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      `;
      const MainProduct = await MainProductShared.render(TopClient);
      return `
        <div id="imageAskara" class="z-n1"></div>
        <div id="imageAskara-zone" class="opacity-0 w-100"></div>
        <div id="summaryComp" class="bg-white py-5 position-relative">
          <div class="d-block position-relative">
            <div id="blokBiru1" class="position-absolute"></div>
            <div id="spaceSumDiv1" class="position-relative container px-lg-5">
              <div id="spaceSum" class="d-inline-block align-middle rounded px-3 px-sm-4 pt-sm-3 bg-white w-100 position-relative js-scroll">
                <h5 id="spaceSumStory" class="text-askara m-0 pt-3 px-sm-1 text-secondary js-highlight">Our Story</h5>
                <h2 id="spaceSumTitle" class="text-askara m-0 pt-3 px-sm-1 text-secondary js-highlight">Askara Internal</h2>
                <p id="spaceSumWord" class="m-0 text-secondary d-block pt-3 px-sm-1 text-secondary js-highlight"></p>
                <a href="#" class="btn btn-primary mt-3 ms-sm-1">Read More</a>
              </div>
            </div>
          </div>
          <div class="d-block position-relative">
            <div id="blokBiru2" class="position-absolute"></div>
            <div id="blokAbu" class="position-absolute"></div>
            <div id="spaceSumDiv2" class="position-relative container px-lg-5">
              <div id="S4Comp" class="w-100 h-100 row m-0 pt-3 ps-2 position-relative">
                <div id="blokAbu2" class="position-absolute"></div>
                <div id="blokPutih" class="position-absolute"></div>
                <div id="S4Symbol" class="position-absolute text-white">4S</div>
                <div class="col-6 col-sm-3 px-sm-2 z-2 js-scroll">
                  <div class="col-s4 rounded bg-white h-100 w-100">
                    <h5 class="m-0 S4CompTitle text-secondary p-3 js-highlight" id="s4SpeedTitle">Speed</h5>
                    <p class="S4CompText text-secondary p-3 js-highlight" id="s4SpeedWord">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit
                    </p>
                  </div>
                </div>
                <div class="col-6 col-sm-3 px-sm-2 z-2 js-scroll">
                  <div class="col-s4 rounded bg-white h-100 w-100">
                    <h5 class="m-0 S4CompTitle text-secondary p-3 js-highlight" id="s4SkillTitle">Skill</h5>
                    <p class="S4CompText text-secondary p-3 js-highlight" id="s4SkillWord">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit
                    </p>
                  </div>
                </div>
                <div class="col-6 col-sm-3 px-sm-2 pt-3 pt-sm-0 z-2 js-scroll">
                  <div class="col-s4 rounded bg-white h-100 w-100">
                    <h5 class="m-0 S4CompTitle text-secondary p-3 js-highlight" id="s4SmartTitle">Smart</h5>
                    <p class="S4CompText text-secondary p-3 js-highlight" id="s4SmartWord">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit
                    </p>
                  </div>
                </div>
                <div class="col-6 col-sm-3 px-sm-2 pt-3 pt-sm-0 z-2 js-scroll">
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
      `;
    },
   
    async afterRender() {
      await MainProductShared.afterRender();
      // Text Limit
      const spaceSumWord = document.querySelector('#spaceSumWord');
      const textSummary = `ASKARA Group established in 1995, a group company that focuses in industrial segment, equipment procurement &amp; hospitality. One stop solution for automotive components, mechanical, electrical services, technical support, construction &amp; landscaping for Office and Industry.`;
      let finalTextSummary = '';
      // End text limit

      const slide00 = document.querySelectorAll('.slide00');
      slide00.forEach(function(elem) {
        elem.src = dummy;
      });

      new Splide( '#splide-client' ).mount();
      const splideElem = new Splide( '#splide-client', {
        type: 'loop',
        focus: 1,
        rewind: false,
        updateOnMove: true,
        pagination: false,
        width: '100%',
        height: '65px',
        gap: '1rem',
        waitForTransition: true,
        speed: 500,
        perPage: 3,
        perMove: 1,
        cover: true,
        mediaQuery: 'min',
        breakpoints: {
          576: {
            perPage: 4,
          },
          768: {
            perPage: 6,
          },
          1200: {
            height: '80px',
          },
          1400: {
            height: '100px',
          },
        },
      } );
      splideElem.mount();

      const resizeWindow = () => {
        if (window.innerWidth <= 576) {
          finalTextSummary = UtilsPenting.truncateWithEllipses(UtilsPenting.decodeEntities(textSummary), 220);
          spaceSumWord.innerHTML = finalTextSummary;
        } else if (window.innerWidth <= 768) {
          finalTextSummary = UtilsPenting.truncateWithEllipses(UtilsPenting.decodeEntities(textSummary), 500);
          spaceSumWord.innerHTML = finalTextSummary;
        } else if (window.innerWidth <= 992) {
          finalTextSummary = UtilsPenting.truncateWithEllipses(UtilsPenting.decodeEntities(textSummary), 500);
          spaceSumWord.innerHTML = finalTextSummary;
        } else if (window.innerWidth <= 1200) {
          finalTextSummary = UtilsPenting.truncateWithEllipses(UtilsPenting.decodeEntities(textSummary), 500);
          spaceSumWord.innerHTML = finalTextSummary;
        } else if (window.innerWidth <= 1400) {
          finalTextSummary = UtilsPenting.truncateWithEllipses(UtilsPenting.decodeEntities(textSummary), 500);
          spaceSumWord.innerHTML = finalTextSummary;
        } else {
          finalTextSummary = UtilsPenting.truncateWithEllipses(UtilsPenting.decodeEntities(textSummary), 500);
          spaceSumWord.innerHTML = finalTextSummary;
        }
      };

      const scrollElements = document.querySelectorAll('.js-scroll');

      const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
          elementTop <=
          ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
      };

      // const displayScrollElement = (element) => {
      //   element.classList.add("scrolled");
      // };

      // const hideScrollElement = (element) => {
      //   element.classList.remove("scrolled");
      // };

      const displayHighlight = (el) => {
        const check = el.querySelectorAll('.js-highlight');
        check.forEach((elHighlight) => {
          elHighlight.classList.add('highlighted');
        });
      };
      const hideHighlight = (el) => {
        const check = el.querySelectorAll('.js-highlight');
        check.forEach((elHighlight) => {
          elHighlight.classList.remove('highlighted');
        });
      };

      const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
          const elementTop = el.getBoundingClientRect().top;
          if (window.innerWidth > window.innerHeight && window.innerHeight <= 600) {
            if (elementTop > 0 && elementTop <= (window.innerHeight || document.documentElement.clientHeight)) {
              displayHighlight(el);
            } else {
              hideHighlight(el);
            }
          } else {
            if (elementTop <= 0) {
              hideHighlight(el);
            } else if (elementTop > 0 && elementInView(el, 80)) {
              displayHighlight(el);
            } else {
              hideHighlight(el);
            }
          }
        });
      };

      // const testScrolling = () => {
      //   const elem = document.getElementById("s4SpeedWord");
      //   const rect = elem.getBoundingClientRect();
      // }

      resizeWindow();

      window.removeEventListener('resize', resizeWindow, false);
      window.removeEventListener('scroll', handleScrollAnimation, false);
      screen.orientation.removeEventListener("change", resizeWindow, false);

      window.addEventListener('resize', resizeWindow, false);
      window.addEventListener('scroll', handleScrollAnimation, false);
      screen.orientation.addEventListener("change", resizeWindow, false);
    },
  };
   
export default home;