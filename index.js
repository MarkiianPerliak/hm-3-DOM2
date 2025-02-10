// 1
const categoriesList = document.querySelector('#categories');

const categories = categoriesList.querySelectorAll('li.item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;

    const categoryItems = category.querySelectorAll('ul li').length;

    console.log(`Категорія: ${categoryTitle}`);
    console.log(`Кількість елементів: ${categoryItems}`);
});

// 2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.querySelector('#ingredients');

const listItems = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li.outerHTML;
}).join('');

ingredientsList.innerHTML = listItems;
// 3
const images = [
    {
      url: 'https://i.guim.co.uk/img/media/d059b58efe8ce50d15639f76448becdeec69bc9b/0_184_7200_4320/master/7200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=cdb5298773baf69c080a77c757fd6c08',
      alt: 'Programming',
    },
    {
      url: 'https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-09/programming-languages.jpg',
      alt: 'Programming',
    },
    {
      url: 'https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-1024x683.jpg',
      alt: 'Programming',
    },
  ];
  
  const gallery = document.querySelector('#gallery');

  gallery.insertAdjacentHTML('beforeend', 
    images
      .map(({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}"></li>`)
      .join('')
  );

  gallery.style.display = 'flex';
  gallery.style.gap = '10px';
  gallery.style.listStyle = 'none';
  gallery.style.padding = '0';
  gallery.style.justifyContent = 'center';

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.width = '300px';
    img.style.height = 'auto';
    img.style.borderRadius = '8px';
    img.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.2)';
  });  
// 4
let counterValue = 0;

const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const increase = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrease = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

decrement.addEventListener('click', decrease);
increment.addEventListener('click', increase);