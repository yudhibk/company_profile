//Import product css
import '../../../styles/about-us.css';

import bgAskara from '../../../images/gedung_askara/optimized_about.jpg';

const AboutUs = {
  async render() {
    return `
      <div class="d-block position-relative" id="aboutUs">
        <img src="" alt="" id="aboutUsImg" class="w-100">
        <h2 class="m-0 position-absolute d-inline-block text-white py-3 py-sm-4 rounded font-lora" id="aboutUsWord">ABOUT US</h2>
      </div>
      <div class="container my-5" id="askaraExp">
        <div class="row m-0">
          <div class="col-12 col-sm-6">
            <h3 class="m-0 pb-3" id="askaraExpTitle">Askara Internal</h3>
            <p id="askaraWord">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit ex voluptatem eligendi sunt distinctio dolorem repellendus nesciunt consequuntur. Temporibus incidunt . quas necessitatibus commodi explicabo saepe beatae odit? <br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit ex voluptatem eligendi sunt distinctio dolorem repellendus nesciunt consequuntur. Temporibus incidunt . quas necessitatibus commodi explicabo saepe beatae odit?</p>
          </div>
          <div class="col-12 col-sm-6"></div>
        </div>
      </div>
      <div class="container-fluid" id="s4Container">
        <div class="row m-0">
          <div class="col-12">
            <div class="d-flex justify-content-center align-items-center">
              <img src="" alt="" class="w-100">
            </div>
          </div>
          <div class="col-12">
            <div class="row m-0 rounded bg-white s4About">
              <div class="col-12 col-sm-6">
                <h4 class="m-0">Speed</h4>
              </div>
              <div class="col-12 col-sm-6">
                <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit</p>
              </div>
            </div>
            <div class="row m-0 rounded bg-white s4About">
              <div class="col-12 col-sm-6">
                <h4 class="m-0">Skill</h4>
              </div>
              <div class="col-12 col-sm-6">
                <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit</p>
              </div>
            </div>
            <div class="row m-0 rounded bg-white s4About">
              <div class="col-12 col-sm-6">
                <h4 class="m-0">Smart</h4>
              </div>
              <div class="col-12 col-sm-6">
                <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit</p>
              </div>
            </div>
            <div class="row m-0 rounded bg-white s4About">
              <div class="col-12 col-sm-6">
                <h4 class="m-0">Smile</h4>
              </div>
              <div class="col-12 col-sm-6">
                <p class="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut voluptate voluptatibus aspernatur iusto atque, eaque aliquid suscipit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Visi &amp; Misi</h2>
      <div class="container">
        <p>Creating the concept of One-stop Solution for our customers for all the needs of a fast-paced industry and be precised</p>
        <div>
          <ol>
            <li>Customers delight</li>
            <li>Speed (Service & Delivery)</li>
            <li>Accuracy (Quality & Commitment)</li>
            <li>Competence (Supply & Competitive Price)</li>
            <li>Ethics (Trusted & Reliable)</li>
          </ol>
        </div>
      </div>
      <div class="container">
        <img src="" alt="" class="w-100">
      </div>
      <h2>Board of Director</h2>
      <div class="container">
        <div class="d-flex">
          <div class="position-relative bodItem">
            <div class="bodWord">
              <h4 class="bodNama"></h4>
              <p class="bodJabat"></p>
            </div>
            <img src="" alt="" class="w-100 position-relative">
          </div>
          <div class="position-relative bodItem">
            <div class="bodWord">
              <h4 class="bodNama"></h4>
              <p class="bodJabat"></p>
            </div>
            <img src="" alt="" class="w-100 position-relative">
          </div>
          <div class="position-relative bodItem">
            <div class="bodWord">
              <h4 class="bodNama"></h4>
              <p class="bodJabat"></p>
            </div>
            <img src="" alt="" class="w-100 position-relative">
          </div>
          <div class="position-relative bodItem">
            <div class="bodWord">
              <h4 class="bodNama"></h4>
              <p class="bodJabat"></p>
            </div>
            <img src="" alt="" class="w-100 position-relative">
          </div>
        </div>
      </div>
    `;
  },
 
  async afterRender() {
    document.querySelector(`#aboutUsImg`).src = bgAskara;
  },
};
 
export default AboutUs;