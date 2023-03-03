//Import product css
import '../../../styles/product.css';

//Asset Image
import dummy from '../../../images/gedung_askara/optimized.jpg';
import dummy2 from '../../../images/dummy.jpg';

import MainProductShared from './compo-shared/main-product';
import TopProductShared from './compo-shared/top-product';

const Product = {
  async render() {
    const MainProduct = await MainProductShared.render('');
    const TopProduct = await TopProductShared.render();
    return `
    <div id="combineFoto" class="position-relative row m-0">
      <div class="w-100 position-absolute d-flex justify-content-start align-items-center" id="titleProductDiv">
        <div class="d-inline-block position-relative">
          <h2 class="d-inline-block font-lora position-relative m-0 fw-bold" id="titleProduct">OUR PRODUCT</h2>
          <hr class="mb-0 mt-2">
        </div>
      </div>
      <div id="combineFoto1" class="p-0 col-3 h-100">
        <img src="" id="combineFotoImg1">
      </div>
      <div id="combineFoto2" class="p-0 col-3 h-100">
        <img src="" id="combineFotoImg2">
      </div>
      <div id="combineFoto3" class="p-0 col-3 h-100">
        <img src="" id="combineFotoImg3">
      </div>
      <div id="combineFoto4" class="p-0 col-3 h-100">
        <img src="" id="combineFotoImg4">
      </div>
    </div>
    ${MainProduct}
    <div class="w-100 bg-white pt-2 pb-3 js-scroll">
      ${TopProduct}
    </div>
    <div class="js-scroll">
      <h2 class="text-center py-5 mt-2 fw-bold text-secondary js-highlight" id="titleProdfam">Category Product</h2>
    </div>
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
    await TopProductShared.afterRender();

    document.querySelector('#SeeMoreProd').style.display = 'none';

    let combineFotoImg = [];
    for (let i = 1; i < 5; i++) {
      combineFotoImg[i] = document.querySelector(`#combineFotoImg${i}`);
      combineFotoImg[i].src = dummy;
    }
    const categoryListImg = document.querySelectorAll('.categoryListImg');
    categoryListImg.forEach(function(elem) {
      elem.src = dummy2;
    });
  },
};
 
export default Product;