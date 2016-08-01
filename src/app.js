'use strict';

import 'babel-polyfill';

import eventlistenerHandler from './common/EventListenerHandler';

import tagCloudResult from './common/Tag';

import './app.less';
import './external/tingle.css';

(function(){
  document.addEventListener('click', eventlistenerHandler, false);
  
  let tagCloudHolder = document.querySelector(".tag-cloud-list");
  tagCloudHolder.innerHTML = tagCloudResult;
}());
