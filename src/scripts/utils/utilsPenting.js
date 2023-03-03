import { async } from "regenerator-runtime";

const UtilsPenting = {
  decodeEntities(str) {
    const element = document.createElement('div');
    if (str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      // element.textContent = '';
    }
    // element.remove();
    return str;
  },
  
  truncateWithEllipses(text, max) {
    return text.substr(0, max-1)+(text.length>max?'&hellip;':'');
  },
};

class MediaQuery {

  constructor(page) {
    this.page = page;
    this.FuncXS = null;
    this.FuncSM = null;
    this.FuncMD = null;
    this.FuncLG = null;
    this.FuncXL = null;
    this.FuncXXL = null;
  }

  resizeHandlerQuery(screenObj) {
    const iw = window.innerWidth;
    let size = null;
    for (const obj in screenObj) {
      if (iw >= screenObj[obj].size) {
        if (screenObj[obj].func !== null) size = obj;
      } 
    }
    screenObj[size].func()
  }

  async runMedia() {
    const screenObj = {
      xs: {
        size: 0,
        func: this.FuncXS
      },
      sm: {
        size: 576,
        func: this.FuncSM
      },
      md: {
        size: 768,
        func: this.FuncMD
      },
      lg: {
        size: 992,
        func: this.FuncLG
      },
      xl: {
        size: 1200,
        func: this.FuncXL
      },
      xxl: {
        size: 1400,
        func: this.FuncXXL
      }
    };
    this.resizeHandlerQuery(screenObj);
    window.removeEventListener('resize', () => {
      this.resizeHandlerQuery(screenObj)
    });
    screen.orientation.removeEventListener("change", () => {
      this.resizeHandlerQuery(screenObj)
    });
    window.addEventListener('resize', () => {
      this.resizeHandlerQuery(screenObj)
    });
    screen.orientation.addEventListener("change", () => {
      this.resizeHandlerQuery(screenObj)
    });
  }
};

class ScrollAnime {

  async displayScrollElement (element) {
    element.classList.add("scrolled");
  };

  async hideScrollElement (element) {
    element.classList.remove("scrolled");
  };

  async displayHighlight (el) {
    const check = el.querySelectorAll('.js-highlight');
    check.forEach((elHighlight) => {
      elHighlight.classList.add('highlighted');
    });
  }

  async hideHighlight (el) {
    const check = el.querySelectorAll('.js-highlight');
    check.forEach((elHighlight) => {
      elHighlight.classList.remove('highlighted');
    });
  }

  async handleScrollAnimation (scrollElements) {
    scrollElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (window.innerWidth > window.innerHeight && window.innerHeight <= 568) {
        if (elementTop > 0 && elementTop <= (window.innerHeight || document.documentElement.clientHeight)) {
          this.displayHighlight(el);
          this.displayScrollElement(el);
        } else {
          this.hideHighlight(el);
          this.hideScrollElement(el);
        }
      } else {
        if ( elementTop > 0 && elementTop <= (window.innerHeight || document.documentElement.clientHeight) - 100 ) {
          this.displayHighlight(el);
          this.displayScrollElement(el);
        } else {
          this.hideHighlight(el);
          this.hideScrollElement(el);
        }
      }
    });
  };
};
  
export {MediaQuery, UtilsPenting, ScrollAnime};