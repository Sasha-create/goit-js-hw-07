// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('ul#gallery');

const imgList = images.map(el => {
  const newLiElement = document.createElement('li');
  newLiElement.insertAdjacentHTML(
    'beforeend',
    `<img src="${el.url}" alt="${el.alt}">`,
  );
  return newLiElement;
});
galleryList.append(...imgList);

galleryList.style.display = 'flex';
galleryList.style.justifyContent = 'space-around';

const actions = document.querySelectorAll('#gallery li');
actions.forEach(el => {
  el.style.border = '2px solid black';
  el.style.borderRadius = '2px';
  el.style.width = '400px';
  el.style.height = '200px';
  el.style.overflow = 'hidden';
});
