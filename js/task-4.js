'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const email = formData.get('email').trim();
  const password = formData.get('password').trim();

  if (email === '' || password === '') {
    window.alert('All form fields must be filled in');
    return;
  }

  const newForm = {
    email,
    password,
  };
  console.log(newForm);
  event.target.reset();
});

const label = document.querySelectorAll('label');
const wrapper = document.createElement('div');
wrapper.className = 'login-form-labels';
for (let i = 0; i < label.length; i += 1) {
  label[i].className = 'login-form-label';
  form.insertBefore(wrapper, label[i]);
  wrapper.appendChild(label[i]);
}

const input = document.querySelectorAll('input');
for (let i = 0; i < input.length; i += 1) {
  input[i].className = 'login-form-input';
}

const btn = document.querySelector('button');
btn.className = 'login-form-btn';
btn.textContent = 'Log in';
