(() => {
  const login = (data: {email:string, password:string}) => {
    console.log(data.email, data.password);
  }

  // login('juan@gmail.com', '123456');


  login({
    email: 'juan@gmail.com',
    password: '123456'
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  const products: any[] = [];

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
