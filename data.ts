const faker = require('faker');
let data = [];
let categories = ['Watersport', 'Soccer', 'Chess', 'Running'];
faker.seed(100);
for(let i = 0; i<503; i++) {
  const category = faker.helpers.randomize(categories);
  data.push({
    category,
    id: i,
    name: faker.commerce.productName(),
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price()),
  })
}

module.exports = function() {
  return {
    categories,
    products: data,
    orders: [],
  }
}
