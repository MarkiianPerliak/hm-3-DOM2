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
    return li;
});

ingredientsList.append(...listItems);
// 3

