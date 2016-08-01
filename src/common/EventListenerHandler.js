'use strict';

import Storage from './Storage';
import tingle from 'tingle.js';

let eventListenerHandler = function(event) {
    let appStorage = new Storage();
    let modal = new tingle.modal();
    
    if (event.target.hasAttribute("data-coffee")) {
      let t = event.target;
      let coffee = t.dataset.coffee;
      let cnt = appStorage.propsMap.get(coffee);
      modal.setContent('<h1>' + cnt[appStorage.siteLanguage] + '</h1>');
      modal.open();
    }
    
    if (event.target.hasAttribute("data-language")) {
      let t = event.target;
      let lang = t.dataset.language;
      appStorage.siteLanguage=lang;
      location.reload();
    }
  };

export default eventListenerHandler;
