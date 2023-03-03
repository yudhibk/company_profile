//Import product css
import '../../../styles/contact.css';

const Contact = {
  async render() {
    return `
      <div id="contactHead" class="position-relative">
        <div class="w-100 position-absolute d-flex justify-content-start align-items-center" id="contactHeadDiv">
          <div class="d-inline-block position-relative">
            <h2 class="d-inline-block font-lora position-relative m-0 fw-bold" id="contactHeadWord">CONTACT US</h2>
            <hr class="mb-0 mt-2">
          </div>
        </div>
        <img src="" alt="" id="contactHeadImg">
      </div>
      <div class="container py-5" id="contactAddr">
        <div class="row m-0">
          <div class="col-12 col-md-6 pb-4 pb-md-0">
            <h2 class="fw-bold d-block font-lora position-relative mb-5" id="contactAddrTitle">PT. Askara Internal</h2>
            <h4 class="mb-3">Address :</h4>
            <p class="mb-3">Jl. KH. Noer Alie Duta Permai Blok C IV No. 09 - 12<br>Bekasi Barat, Kota Bekasi<br>Jawa Barat 17145</p>
          </div>
          <div class="col-12 col-md-6 rounded pb-2 pt-3" style="box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.25);">
            <h5 class="mb-3">Maps</h5>
            <div id="mapDiv" class="rounded">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3966.1171206361128!2d106.96911571536104!3d-6.248294062920992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTQnNTMuOSJTIDEwNsKwNTgnMTYuNyJF!5e0!3m2!1sen!2sid!4v1676357720140!5m2!1sen!2sid"
              width="100%" height="100%" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="container py-5 mt-2" id="contactMain">
        <div class="d-block position-relative">
          <div class="garisHr position-absolute w-100"></div>
          <h2 class="mb-0 d-inline-block bg-white ms-5 px-3 font-lora fw-bold position-relative" id="contactMainTitle">Contact</h2>
        </div>
        <div class="row m-0 justify-content-center pt-4">
          <a href="tel:+88888" id="telLink" class="col-12 col-md-6 col-lg-4 text-dark pb-3">
            <div class="row m-0 border py-4 rounded h-100 contactMainDiv js-scroll">
              <div class="col-3 px-0">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="rounded-circle bg-secondary d-flex justify-content-center align-items-center circle-icon">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <h5 class="m-0 fw-normal">Telephone</h5>
                <p class="m-0">+88888</p>
              </div>
            </div>
          </a>
          <a href="sms:+88888" id="smsLink" class="col-12 col-md-6 col-lg-4 text-dark pb-3">
            <div class="row m-0 border py-4 rounded h-100 contactMainDiv js-scroll">
              <div class="col-3 px-0">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="rounded-circle bg-secondary d-flex justify-content-center align-items-center circle-icon">
                    <i class="fa-solid fa-comment-sms"></i>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <h5 class="m-0 fw-normal">SMS</h5>
                <p class="m-0">+88888</p>
              </div>
            </div>
          </a>
          <a href="mailto:nani@gmail.com" id="mailLink" class="col-12 col-md-6 col-lg-4 text-dark pb-3">
            <div class="row m-0 border py-4 rounded h-100 contactMainDiv js-scroll">
              <div class="col-3 px-0">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="rounded-circle bg-secondary d-flex justify-content-center align-items-center circle-icon">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <h5 class="m-0 fw-normal">E-Mail</h5>
                <p class="m-0">nani@gmail.com</p>
              </div>
            </div>
          </a>
          <a href="https://wa.me/88888?text=test" id="waLink" target="_blank" class="col-12 col-md-6 col-lg-4 text-dark pb-3">
            <div class="row m-0 border py-4 rounded h-100 contactMainDiv js-scroll">
              <div class="col-3">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="rounded-circle bg-secondary d-flex justify-content-center align-items-center circle-icon">
                    <i class="fa-brands fa-whatsapp"></i>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <h5 class="m-0 fw-normal">Whatsapp</h5>
                <p class="m-0">+88888</p>
              </div>
            </div>
          </a>
          <a href="https://join.skype.com/invite/wc3RQwi4gkdu" id="skypeLink" target="_blank" class="col-12 col-md-6 col-lg-4 text-dark pb-3">
            <div class="row m-0 border py-4 rounded h-100 contactMainDiv js-scroll">
              <div class="col-3">
                <div class="d-flex justify-content-center align-items-center">
                  <div class="rounded-circle bg-secondary d-flex justify-content-center align-items-center circle-icon">
                    <i class="fa-brands fa-skype"></i>
                  </div>
                </div>
              </div>
              <div class="col-9">
                <h5 class="m-0 fw-normal">Skype</h5>
                <p class="m-0">Yudhi Prasetyo Wibowo</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    `;
  },
  
  async afterRender() {
  },
};
  
export default Contact;