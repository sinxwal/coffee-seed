'use strict';

import * as TagCloud from 'tag-cloud';

let tagCloudResult = '';

let tags = [
  {tagName: 'Americano', count: 4},
  {tagName: 'Cappuccino', count: 2},
  {tagName: 'Corretto', count: 14},
  {tagName: 'Doppio', count: 13},
  {tagName: 'Espresso', count: 1},
  {tagName: 'Glace', count: 8},
  {tagName: 'Irish', count: 7},
  {tagName: 'Latte', count: 3},
  {tagName: 'Lungo', count: 9},
  {tagName: 'Macchiato', count: 5},
  {tagName: 'Marocchino', count: 10},
  {tagName: 'Mocha', count: 6},
  {tagName: 'Piccolo', count: 11},
  {tagName: 'Ristretto', count: 12},
  {tagName: 'Romano', count: 15}
];

TagCloud.tagCloud(tags, function (err, data) {
    if(!err) tagCloudResult += data;
  },
  { 
    htmlTag: "li",
    classPrefix: "item-",
    numBuckets: 15,
    additionalAttributes: {
      "data-coffee": '{{tag}}',
      "data-toggle2": "modal",
      "data-target2": "#coffeeModal"
      
    }
  }
);

if(tagCloudResult) tagCloudResult = '<ul>' + tagCloudResult + '</ul>';

export default tagCloudResult;
