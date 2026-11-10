'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('button');
const span = document.querySelector('.color');
let color;
const handleClick = () => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  span.textContent = newColor;
};

btn.addEventListener('click', handleClick);
