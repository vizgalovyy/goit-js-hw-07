'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
  if (input.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else output.textContent = event.target.value.trim();
});

const body = document.querySelector('body');
console.log(body);
const title = document.querySelector('h1');
const wrapper = document.createElement('div');
wrapper.className = 'input';
body.insertBefore(wrapper, input);
wrapper.appendChild(input);
body.insertBefore(wrapper, title);
wrapper.appendChild(title);
