(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  let myString: string | undefined = undefined;

  myString = 'abc';

  // myNull = 123;

  function hi(name: string | null){
    let hello: string = 'Hola ' + (name ?? "nobody");
    console.log(hello);
  }

  function hiv2(name: string | null){
    let hello: string = 'Hola ';

    // Optional chaining o encadenamiento opcional
    hello += name?.toUpperCase() || 'nobody';

    console.log(hello);
  }

  hi('Alex');
  hi(null);

  hiv2('Alex');
  hiv2(null);

})();
