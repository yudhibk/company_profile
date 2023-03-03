//Import product css
import '../../../styles/about-us.css';

//Asset Image
import dummy2 from '../../../images/dummy.jpg';
import bgAskara from '../../../images/gedung_askara/header-about-us.jpg';

import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

import {MediaQuery} from '../../utils/utilsPenting';
import {Tooltip} from 'bootstrap';

const AboutUs = {
  async render() {
    const TopClient = `
    <div class="js-scroll">
      <h2 class="font-lora text-center mb-0 pt-5 text-secondary js-highlight" id="sumClientTitle">We Are The Part Of<br><span class="text-primary">Banshu Group</span></h2>
    </div>
    <div class="col-12 py-5 px-0">
      <div class="d-block" id="sumClientDiv">
        <div class="container px-0 px-lg-5">
          <section class="splide" aria-labelledby="carousel-heading" id="sumClientSplide">
            <div class="splide__track">
              <ul class="splide__list">
                <li class="splide__slide">
                  <a href="#" target="_blank" class="sumClientLink d-inline-block">
                    <img src="" alt="" class="sumClientImg">
                  </a>
                </li>
                <li class="splide__slide">
                  <a href="javascript:void(0)" class="sumClientLink d-inline-block">
                    <img src="" alt="" class="sumClientImg">
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
    `;
    return `
      <div id="aboutUs" class="position-relative">
        <div class="w-100 position-absolute d-flex justify-content-start align-items-center" id="aboutUsDiv">
          <div class="d-inline-block position-relative">
            <h2 class="d-inline-block font-lora position-relative m-0 fw-bold" id="aboutUsWord">ABOUT US</h2>
            <hr class="mb-0 mt-2">
          </div>
        </div>
        <img src="" alt="" id="aboutUsImg">
      </div>
      <div class="container my-5 pt-2" id="askaraExp">
        <div class="row m-0">
          <div class="col-12 col-md-6 pb-4 pb-md-0 js-scroll">
            <h3 class="m-0 pb-3 pt-1 text-secondary js-highlight" id="askaraExpTitle">PT. Askara Internal</h3>
            <p class="text-secondary m-0 js-highlight" id="askaraWord">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit ex voluptatem eligendi sunt distinctio dolorem repellendus nesciunt consequuntur. Temporibus incidunt . quas necessitatibus commodi explicabo saepe beatae odit? <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit ex voluptatem eligendi sunt distinctio dolorem repellendus nesciunt consequuntur. Temporibus incidunt . quas necessitatibus commodi explicabo saepe beatae odit?</p>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <section class="splide" aria-label="Slide Askara Organization" id="askaraWorker">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide" data-splide-interval="10000"><img src="" alt="" class="askaraWorkerImg"></li>
                  <li class="splide__slide" data-splide-interval="10000"><img src="" alt="" class="askaraWorkerImg"></li>
                  <li class="splide__slide" data-splide-interval="10000"><img src="" alt="" class="askaraWorkerImg"></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="js-scroll">
        <h2 class="font-lora text-center mb-0 pt-5 text-secondary js-highlight" id="s4AboutH2">Our Culture</h2>
      </div>
      <div class="container my-5 px-4 py-2 rounded" id="s4Container">
        <div class="row m-0 rounded bg-white my-3 p-3 s4About js-scroll">
          <div class="col-12 col-sm-6">
            <h4 class="m-0 text-end text-secondary pb-sm-5 px-lg-5 s4AboutTitle js-highlight">Speed</h4>
          </div>
          <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center">
            <p class="m-0 text-secondary px-lg-5 s4AboutWord js-highlight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit</p>
          </div>
        </div>
        <div class="row m-0 rounded bg-white my-3 p-3 s4About js-scroll">
          <div class="col-12 col-sm-6">
            <h4 class="m-0 text-end text-secondary pb-sm-5 px-lg-5 s4AboutTitle js-highlight">Skill</h4>
          </div>
          <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center">
            <p class="m-0 text-secondary px-lg-5 s4AboutWord js-highlight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit</p>
          </div>
        </div>
        <div class="row m-0 rounded bg-white my-3 p-3 s4About js-scroll">
          <div class="col-12 col-sm-6">
            <h4 class="m-0 text-end text-secondary pb-sm-5 px-lg-5 s4AboutTitle js-highlight">Smart</h4>
          </div>
          <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center">
            <p class="m-0 text-secondary px-lg-5 s4AboutWord js-highlight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit</p>
          </div>
        </div>
        <div class="row m-0 rounded bg-white my-3 p-3 s4About js-scroll">
          <div class="col-12 col-sm-6">
            <h4 class="m-0 text-end text-secondary pb-sm-5 px-lg-5 s4AboutTitle js-highlight">Smile</h4>
          </div>
          <div class="col-12 col-sm-6 d-flex justify-content-center align-items-center">
            <p class="m-0 text-secondary px-lg-5 s4AboutWord js-highlight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit</p>
          </div>
        </div>
      </div>
      <div class="js-scroll">
        <h2 class="font-lora text-center mb-0 pt-5 text-secondary js-highlight" id="vmTitle">Vision &amp; Mission</h2>
      </div>
      <div class="container my-5 px-4 js-scroll">
        <p class="text-center text-secondary js-highlight">Creating the concept of One-stop Solution for our customers for all the needs of a fast-paced industry and be precised</p>
        <div class="pt-3 d-flex justify-content-center align-items-center text-secondary js-highlight">
          <ol>
            <li>Customers delight</li>
            <li>Speed (Service & Delivery)</li>
            <li>Accuracy (Quality & Commitment)</li>
            <li>Competence (Supply & Competitive Price)</li>
            <li>Ethics (Trusted & Reliable)</li>
          </ol>
        </div>
      </div>
      <div class="js-scroll">
        <h2 class="font-lora text-center mb-0 pt-5 text-secondary js-highlight" id="sorgTitle">Organizational Structure</h2>
      </div>
      <div class="container my-5">
        <img src="" alt="" class="w-100" id="sorgImg">
      </div>
      <div class="js-scroll">
        <h2 class="font-lora text-center mb-0 pt-5 text-secondary js-highlight" id="bodTitle">Board of Director</h2>
      </div>
      <div class="container my-5 pt-2">
        <div id="bodFlex">
          <div class="bodFlexContain">
            <div class="position-relative bodItem">
              <div class="bodWord position-absolute text-center px-3 py-4 js-scroll">
                <h4 class="bodNama mx-0 mt-0 mb-2 text-secondary js-highlight">Yudhi Prasetyo Wibowo</h4>
                <p class="bodJabat m-0 text-secondary js-highlight">Programmer</p>
              </div>
              <img src="" alt="" class="w-100 h-100 position-relative bodImg">
            </div>
          </div>
          <div class="bodFlexContain">
            <div class="position-relative bodItem">
              <div class="bodWord position-absolute text-center px-3 py-4 js-scroll">
                <h4 class="bodNama mx-0 mt-0 mb-2 text-secondary js-highlight">Yudhi Prasetyo Wibowo</h4>
                <p class="bodJabat m-0 text-secondary js-highlight">Programmer</p>
              </div>
              <img src="" alt="" class="w-100 h-100 position-relative bodImg">
            </div>
          </div>
          <div class="bodFlexContain">
            <div class="position-relative bodItem">
              <div class="bodWord position-absolute text-center px-3 py-4 js-scroll">
                <h4 class="bodNama mx-0 mt-0 mb-2 text-secondary js-highlight">Yudhi Prasetyo Wibowo</h4>
                <p class="bodJabat m-0 text-secondary js-highlight">Programmer</p>
              </div>
              <img src="" alt="" class="w-100 h-100 position-relative bodImg">
            </div>
          </div>
          <div class="bodFlexContain">
            <div class="position-relative bodItem">
              <div class="bodWord position-absolute text-center px-3 py-4 js-scroll">
                <h4 class="bodNama mx-0 mt-0 mb-2 text-secondary js-highlight">Yudhi Prasetyo Wibowo</h4>
                <p class="bodJabat m-0 text-secondary js-highlight">Programmer</p>
              </div>
              <img src="" alt="" class="w-100 h-100 position-relative bodImg">
            </div>
          </div>
        </div>
      </div>
      ${TopClient}
    `;
  },
 
  async afterRender() {
    document.querySelector(`#aboutUsImg`).src = bgAskara;
    const askaraWorkerImg = document.querySelectorAll('.askaraWorkerImg');
    askaraWorkerImg.forEach(function(elem) {
      elem.src = dummy2;
    });
    const bodImg = document.querySelectorAll('.bodImg');
    bodImg.forEach(function(elem) {
      elem.src = dummy2;
    });
    document.querySelector(`#sorgImg`).src = dummy2;

    const splideElem = new Splide( '#askaraWorker', {
      type: 'loop',
      autoplay: true,
      pagination: false,
      perPage: 1,
      perMove: 1,
      arrows: false,
      drag: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      height: '80%',
      width: '80%',
      mediaQuery: 'min',
      breakpoints: {
        576: {
        },
        768: {
          height: '100%',
          width: '100%',
        },
        1200: {
        },
        1400: {
        },
      },
    } );
    splideElem.mount();

    const sumClientImg = document.querySelectorAll('.sumClientImg');
    sumClientImg.forEach(function(elem) {
      elem.src = dummy2;
    });
    const sumClientLink = document.querySelectorAll('.sumClientLink');
    sumClientLink.forEach(function(elem) {
      new Tooltip(elem, {
        'placement': 'bottom',
        'title': 'Ini Nama Client',
        'customClass': 'custom-tooltip'
      })
    });
    const sumClientSplide = new Splide( '#sumClientSplide', {
      type: 'loop',
      focus: 1,
      rewind: false,
      updateOnMove: true,
      pagination: false,
      width: '100%',
      // height: '65px',
      gap: '1rem',
      waitForTransition: true,
      speed: 500,
      perPage: 2,
      perMove: 1,
      cover: true,
      mediaQuery: 'min',
      breakpoints: {
        576: {
          perPage: 4,
        },
        768: {
        },
        1200: {
        },
        1400: {
        },
      },
    } );
    sumClientSplide.mount();

    const mediaLG = () => {
      const bodFlexContain = document.querySelectorAll('.bodFlexContain');
      if (bodFlexContain.length === 4) {
        bodFlexContain.forEach(function(elem) {
          elem.style.width = '48%';
        });
      }
    }

    const mediaXS = () => {
      const bodFlexContain = document.querySelectorAll('.bodFlexContain');
      bodFlexContain.forEach(function(elem) {
        elem.style.width = 'auto';
      });
    }

    const setMedia = new MediaQuery('about-us');
    setMedia.FuncXS = mediaXS;
    setMedia.FuncLG = mediaLG;
    await setMedia.runMedia();
  },
};
 
export default AboutUs;