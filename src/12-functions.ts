(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  const createProductJson = (
      title: string,
      createdAt: Date,
      stock: number,
      size?: Sizes
  ) => {
     return {
          title,
          createdAt,
          stock,
          size
      }
  }


  const product1 = createProductJson('P1', new Date(), 5);

  console.log(product1);

})();
