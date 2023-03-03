const Page404 = {
    async render() {
      return `
        <div id="umHead" style="">
          <div class="d-flex justify-content-center align-items-center">
            <div id="umContainer" class="container">
              <div class="row pt-5">
                <div class="col-12 d-flex justify-content-center">
                  <h2 class="fw-bold text-center">UNDER CONSTRUCTION</h2>
                </div>
              </div>
              <div class="row pt-4">
                <div class="col-12 d-flex justify-content-center">
                  <h2 class="fw-light text-center">WE ARE DOING SOMETHING COOL</h2>
                </div>
              </div>
              <hr class="border-end" id="umHr" />
              <div class="row pt-3">
                <div class="col-12 d-flex justify-content-center">
                  <p id="umWord" class="fw-bold text-center">come back soon</p>
                </div>
              </div>
              <div class="row justify-content-center py-4">
                  <img id="umLogoAskara" src="img/Logo_AI.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="umAssetImg3">
          <img src="img/elememt_3.png" alt="" />
        </div>
        <div class="umAssetImg2">
          <img src="img/element_2.png" alt="" />
        </div>
        <div class="umAssetImg1">
          <img src="img/element_1.png" alt="" />
        </div>
      `;
    },
   
    async afterRender() {
    },
  };
   
  export default Page404;