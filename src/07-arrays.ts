(() => {
  let prices = [1, 2, 3, 4, 5, 6, 7];

  // prices.push('ocho');
  // prices.push(true);
  // prices.push({});

  prices.push(8);
  console.table(prices);

  let products = ['Nombre', true];
  // products.push(123);
  products.push('Description');
  console.table(products);


  let mixed: (number | string | boolean | Object)[] = ["Hola", true];
  mixed.push(123);
  mixed.push('as');
  mixed.push(false);
  mixed.push({});
  mixed.push([]);

  console.table(mixed);





  let numbers = [1, 2, 3, 4, 5, 6, 7];
  let newNumbers = numbers.map(item => item * 2);

  console.table(newNumbers);


})();
