// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// const currentPageUrl = '/contact';

// const linkEl = document.querySelector(
//   `.site-nav__link[href="${currentPageUrl}"]`,
// );

// console.log(linkEl);
// linkEl.classList.add('site-nav__link--current');
const counterRef = document.getElementById('value');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');

let counterValue = +counterRef.textContent;
function increment() {
  counterValue += 1;
}

function decrement() {
  if (counterValue < 1) {
    counterValue = 0;
  } else {
    counterValue -= 1;
  }
}

incrementBtnRef.addEventListener('click', () => {
  increment();
  counterRef.textContent = counterValue;
});
decrementBtnRef.addEventListener('click', () => {
  decrement();
  counterRef.textContent = counterValue;
});
