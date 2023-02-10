(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Product #1',
    createdAt: new Date(2023, 1, 1),
    stock: 15,
  });

  addProduct({
    title: 'Product #2',
    createdAt: new Date(2023, 1, 23),
    stock: 45,
    size: 'M'
  });

  console.log(products);

})();
