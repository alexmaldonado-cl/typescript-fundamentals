import {createProduct, calcStock, products} from './product.service';

createProduct({
  name: 'Product #1',
  createdAt: new Date(2023, 1, 1),
  stock: 15,
});

createProduct({
  name: 'Product #2',
  createdAt: new Date(2023, 1, 23),
  stock: 45,
  size: 'M'
});

console.log(products);
console.log(calcStock());
