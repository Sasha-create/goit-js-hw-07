// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
const inputField = document.querySelector('#name-input');

inputField.addEventListener('input', inputSolution);

function inputSolution(el) {
  const outputField = document.querySelector('#name-output');
  if (el.target.value === '') outputField.textContent = 'незнакомец';
  else outputField.textContent = el.target.value;
}
