//Import product css
import '../../../styles/page404.css';

const Page404 = {
    async render() {
      return `
        <div class="position-relative w-100" id="page404">
          <div class="d-inline-block text-center position-absolute bg-dark text-white rounded px-4 py-1" id="page404Begin">
            <h5 class="font-lora fw-bold m-0">Adventure seekers.</h5>
          </div>
          <div class="d-inline-block text-center position-absolute" id="page404Main">
            <h2 class="font-lora fw-bold">404</h2>
            <h4 class="font-lora fw-bold">Not Found</h4>
          </div>
          <div class="d-inline-block text-center position-absolute bg-dark text-white rounded px-4 py-1" id="page404End">
            <h5 class="font-lora fw-bold m-0">Gain more experience.</h5>
          </div>
        </div>
      `;
    },
    async afterRender() {
    },
  };
   
  export default Page404;