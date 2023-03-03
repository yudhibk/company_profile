//Import product css
import '../../../../styles/compo-shared/top-product.css';

import dummy from '../../../../images/gedung_askara/optimized.jpg';
// Import splide
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

const TopProductShared = {
    async render() {
      return `
        <h2 class="text-center py-5 mt-2 fw-bold text-secondary js-highlight" id="titleTopProduct">OUR Top Product</h2>
        <div class="w-100 position-relative mb-3">
          <div class="position-absolute w-100 h-100" id="topProdAbu"></div>
          <div class="container rounded position-relative px-0 px-lg-5" id="topProdContainer">
            <section class="splide py-4" aria-labelledby="carousel-heading" id="topProdContain">
              <div class="splide__track">
                <ul class="splide__list">
                  <li class="splide__slide">
                    <div class="bg-white rounded topProdSlide">
                      <img src="" alt="barang" class="topProdImage">
                      <h3 class="m-0 text-center topProdh3 px-1 pb-3 pt-4">{nama_barang}</h3>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="bg-white rounded topProdSlide">
                      <img src="" alt="barang" class="topProdImage">
                      <h3 class="m-0 text-center topProdh3 px-1 pb-3 pt-4">{nama_barang}</h3>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="bg-white rounded topProdSlide">
                      <img src="" alt="barang" class="topProdImage">
                      <h3 class="m-0 text-center topProdh3 px-1 pb-3 pt-4">{nama_barang}</h3>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="bg-white rounded topProdSlide">
                      <img src="" alt="barang" class="topProdImage">
                      <h3 class="m-0 text-center topProdh3 px-1 pb-3 pt-4">{nama_barang}</h3>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="bg-white rounded topProdSlide">
                      <img src="" alt="barang" class="topProdImage">
                      <h3 class="m-0 text-center topProdh3 px-1 pb-3 pt-4">{nama_barang}</h3>
                    </div>
                  </li>
                  <li class="splide__slide">
                    <div class="bg-white rounded topProdSlide">
                      <img src="" alt="barang" class="topProdImage">
                      <h3 class="m-0 text-center topProdh3 px-1 pb-3 pt-4">{nama_barang}</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      `;
    },
  
    async afterRender() {
      const slide00 = document.querySelectorAll('.topProdImage');
      slide00.forEach(function(elem) {
        elem.src = dummy;
      });
      const splideElem = new Splide( '#topProdContain', {
        type: 'loop',
        focus: 1,
        rewind: false,
        updateOnMove: true,
        pagination: false,
        width: '100%',
        gap: '.5rem',
        waitForTransition: true,
        speed: 500,
        perPage: 2,
        perMove: 1,
        cover: true,
        mediaQuery: 'min',
        breakpoints: {
          576: {
            perPage: 3,
          },
          768: {
            perPage: 4,
          },
          992: {
            perPage: 5,
          },
          1200: {
            gap: '1.5rem',
          },
          1400: {
            perPage: 6,
          }
        },
      } );
      splideElem.mount();
    },
  };
   
  export default TopProductShared;