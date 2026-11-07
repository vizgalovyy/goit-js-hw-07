'use strict';

const category = document.querySelector('#categories');
console.log('Number of categories:' + category.childElementCount);
const title = document.querySelectorAll('h2');
title.forEach(item => {
  console.log('Category: ' + item.textContent);
  console.log('Elements: ' + item.nextSibling.nextSibling.childElementCount);
});
