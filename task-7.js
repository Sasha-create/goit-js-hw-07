// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
const textSizeGlass = document.querySelector('#font-size-control');
textSizeGlass.addEventListener(
  'input',
  el =>
    (document.querySelector(
      'span#text',
    ).style.fontSize = `${el.target.value}px`),
);

textSizeGlass.setAttribute('min', '0');
textSizeGlass.setAttribute('max', '100');
textSizeGlass.setAttribute('step', '1');
textSizeGlass.value = parseInt(
  window.getComputedStyle(document.getElementById('text')).fontSize,
);
