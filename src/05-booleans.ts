(() => {

  let isEnable = true;
  // isEnable = 'abc';
  // isEnable = 123;
  isEnable = false;

  let isNew : boolean = false;

  const random = Math.random();
  console.log('random', random);

  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

})();
