(() => {

  let productTitle = "El nombre";
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'Nombre del Producto';

  console.log("productTitle", productTitle);

  let productDescription = "I'm bla bla bla bla bla bla";
  console.log("productDescription", productDescription);

  const summary = `
  PRODUCTO: ${productTitle}

  DESCRIPCION: ${productDescription}
  `;


  console.log(summary);
})();
