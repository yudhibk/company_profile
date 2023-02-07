//Import product css
import '../../../styles/product.css';

//Asset Image
import dummy from '../../../images/gedung_askara/optimized.jpg';
import dummy2 from '../../../images/dummy.jpg';

// Import splide
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';

import MainProductShared from './compo-shared/main-product';

const Product = {
  async render() {
    const MainProduct = await MainProductShared.render("");
    return `
    <div id="combineFoto">
      <h2 class="position-absolute d-inline-block px-5 py-3 font-lora rounded" id="titleProduct">Product</h2>
      <div id="combineFoto1" class="p-0">
        <img src="" id="combineFotoImg1">
      </div>
      <div id="combineFoto2" class="p-0">
        <img src="" id="combineFotoImg2">
      </div>
      <div id="combineFoto3" class="p-0">
        <img src="" id="combineFotoImg3">
      </div>
      <div id="combineFoto4" class="p-0">
        <img src="" id="combineFotoImg4">
      </div>
      <div id="combineFoto5" class="p-0">
        <img src="" id="combineFotoImg5">
      </div>
      <div id="combineFoto6" class="p-0">
        <img src="" id="combineFotoImg6">
      </div>
    </div>
    ${MainProduct}
    <h2 class="text-center py-5 mt-2 fw-bold text-secondary" id="titleTopProduct">OUR Top Product</h2>
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
    <h2 class="text-center py-5 mt-2 fw-bold text-secondary" id="titleTopProduct">Category Product</h2>
    <div class="w-100 position-relative mb-5">
      <div class="position-absolute w-100 h-100" id="categoryAbu"></div>
      <div class="container d-flex flex-wrap justify-content-center align-items-center rounded position-relative p-4" id="categoryContain">
        <div class="categoryList bg-white position-relative w-100 rounded d-flex justify-content-center align-items-center border-0">
          <img src="" alt="" class="w-100 position-absolute w-100 h-100 categoryListImg">
          <h4 class="m-0 categoryListTitle position-relative d-inline-block px-4 py-3 rounded fw-bold">{category}</h4>
        </div>
        <div class="categoryList bg-white position-relative w-100 rounded d-flex justify-content-center align-items-center border-0">
          <img src="" alt="" class="w-100 position-absolute w-100 h-100 categoryListImg">
          <h4 class="m-0 categoryListTitle position-relative d-inline-block px-4 py-3 rounded fw-bold">{category}</h4>
        </div>
        <div class="categoryList bg-white position-relative w-100 rounded d-flex justify-content-center align-items-center border-0">
          <img src="" alt="" class="w-100 position-absolute w-100 h-100 categoryListImg">
          <h4 class="m-0 categoryListTitle position-relative d-inline-block px-4 py-3 rounded fw-bold">{category}</h4>
        </div>
        <div class="categoryList bg-white position-relative w-100 rounded d-flex justify-content-center align-items-center border-0">
          <img src="" alt="" class="w-100 position-absolute w-100 h-100 categoryListImg">
          <h4 class="m-0 categoryListTitle position-relative d-inline-block px-4 py-3 rounded fw-bold">{category}</h4>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {

    await MainProductShared.afterRender();

    let combineFotoImg = [];
    for (let i = 1; i < 7; i++) {
      combineFotoImg[i] = document.querySelector(`#combineFotoImg${i}`);
      combineFotoImg[i].src = dummy;
    }
    const slide00 = document.querySelectorAll('.topProdImage');
    slide00.forEach(function(elem) {
      elem.src = dummy2;
    });
    const categoryListImg = document.querySelectorAll('.categoryListImg');
    categoryListImg.forEach(function(elem) {
      elem.src = dummy2;
    });
    new Splide( '#topProdContain' ).mount();
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
 
export default Product;