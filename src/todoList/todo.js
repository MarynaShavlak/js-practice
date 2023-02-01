// TODO

// 1) Створимо список на основі готового масиву
// 2) Додамо форму на екран і будемо доповнювати масив новими елементами

const productList = [
  {
    id: 1,
    text: 'Купити продукти',
  },
  {
    id: 2,
    text: 'Випрати одяг',
  },
  {
    id: 3,
    text: 'Помити посуд',
  },
  {
    id: 4,
    text: 'Помити підлогу',
  },
  {
    id: 5,
    text: 'Поремонувати кран',
  },
];

// const renderList = (products) => {
//   const result = products
//     .map((product) => `<li id="${product.id}">${product.text}</li>`)
//     .join("");
//   return result;
// };

// const renderList = (products) =>
//   products.map(({ id, text }) => `<li id="${id}">${text}</li>`).join("");

const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-input');

const createLi = (id, text) => `<li id="${id}">${text}</li>`;

const renderList = products =>
  products.reduce((acc, { id, text }) => acc + createLi(id, text), '');

const insertListItems = string => {
  const ul = document.querySelector('.todo-list');
  ul.insertAdjacentHTML('beforeend', string);
};

// insertListItems(renderList(productList));
const result = renderList(productList);
insertListItems(result);

const submitHandler = e => {
  e.preventDefault();
  productList.push({ text: input.value, id: productList.length });
  insertListItems(createLi(productList.length, input.value));
  input.value = '';
};

form.addEventListener('submit', submitHandler);
