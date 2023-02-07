//Import product css
import '../../../../styles/compo-shared/main-product.css';

import dummy from '../../../../images/gedung_askara/optimized.jpg';

const MainProductShared = {
    async render(addElem) {
      return `
      <div class="c-home-div position-relative pe-xl-5" id="prodClient">
        <div class="row m-0 pt-lg-5 pe-xl-5">
          <div class="col-12 col-lg-5 pt-5 ps-0 mb-lg-5 pb-lg-5">
            <div class="row m-0 h-100">
              <div class="col-4 col-md-3 col-lg-6 px-0 h-100">
                <div class="d-flex flex-column justify-content-center align-items-center h-100" style="gap: 10px;">
                  <div class="bg-white w-100 rounded-end" id="brgHome1">
                  </div>
                  <div class="bg-white w-100 rounded-end" id="brgHome2">
                  </div>
                </div>
              </div>
              <div class="col-5 col-md-4 col-lg-6 ps-2 pe-0 h-100">
                <div class="d-block bg-white rounded h-100 w-100" id="brgHome3">
                </div>
              </div>
              <div class="col-3 col-md-5 col-lg-0 d-lg-none">
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5 py-5 px-sm-5 px-lg-0 pb-lg-0 mb-lg-5 pb-lg-5">
            <div class="d-block rounded bg-white py-4 px-4 js-scroll" id="sumProdDiv">
              <h3 class="fw-bold pt-2 pb-3 m-0 text-secondary js-highlight" id="sumProdTitle">Our Main Product</h3>
              <p class="m-0 text-secondary js-highlight" id="sumProdWord">
              </p>
              <button type="button" class="btn btn-primary mt-4">See More</button>
            </div>
          </div>
          <div class="col-0 col-lg-2 mb-lg-5 pb-lg-5"></div>
          ${addElem}
        </div>
      </div>
      `;
    },
  
    async afterRender() {
  
      const sumProdWord = document.querySelector('#sumProdWord');
      const textProduct = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit ex voluptatem eligendi sunt distinctio dolorem repellendus nesciunt consequuntur. Temporibus incidunt quas necessitatibus commodi?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit ex voluptatem eligendi sunt distinctio dolorem repellendus nesciunt consequuntur. Temporibus incidunt quas necessitatibus commodi?`;
      sumProdWord.innerHTML = textProduct;
      const brgHome1 = document.querySelector('#brgHome1');
      const brgHome2 = document.querySelector('#brgHome2');
      const brgHome3 = document.querySelector('#brgHome3');
      brgHome1.style.backgroundImage = `url("${dummy}")`;
      brgHome2.style.backgroundImage = `url("${dummy}")`;
      brgHome3.style.backgroundImage = `url("${dummy}")`;
  
      const resizeWindow = () => {
      };

    },
  };
   
  export default MainProductShared;