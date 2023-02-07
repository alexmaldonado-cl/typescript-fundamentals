(() => {
  let userId: string | number;
  userId = 123;
  userId = 'mfivjndib';

  function gretting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(myText.toLowerCase());
      return;
    }

    if(typeof myText === 'number'){
      console.log(myText.toFixed() + 25);
    }
  }

  gretting('asasd');
  gretting(123);
})();
