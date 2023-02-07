// (async ()=> {
//   const limit    = 2;
//   const myCart   = [];
//   const products: (Object)[] = [];

//   async function getProducts() {
//     const response = await fetch('http://api.escuelajs.co/api/v1/products', {
//       method: 'GET'
//     });
//     const data = await response.json();
//     products.concat(data);
//   }

//   function getTotal() {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//       total += products[i].prize ?? 0;
//     }
//     return total;
//   }

//   function addProduct(index:number) {
//     if (getTotal() <= limit) {
//       myCart.push(products[index]);
//     }
//   }

//   await getProducts();

//   addProduct(1);
//   addProduct(2);

//   const total = getTotal();
//   console.log(total);

//   const person = {
//     name: 'Nicolas',
//     lastName: 'Molina'
//   }

//   const rta = {
//     person,
//     limit
//   };

//   console.log(rta);
// });
