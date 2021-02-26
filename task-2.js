const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const vegetablesList = document.getElementById('ingredients');
console.log(vegetablesList);

const ingredientsItems = ingredients.map(vegetable => {
  const item = document.createElement('li');
  item.textContent = vegetable;
  return item;
});

vegetablesList.append(...ingredientsItems);
