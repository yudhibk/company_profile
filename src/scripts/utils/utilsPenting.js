const utilsPenting = {
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
  
export default utilsPenting;