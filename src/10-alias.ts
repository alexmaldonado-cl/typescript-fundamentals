(() => {

  type UserID = string | number;

  let userId: UserID;

  //Literal types
  type Sizes =  'S' | 'M' | 'L' | 'XL';

  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  // shirtSize = 'ssssssss';



  function gretting(myText: UserID, size: Sizes){
    if(typeof myText === 'string'){
      console.log(myText.toLowerCase());
      return;
    }

    if(typeof myText === 'number'){
      console.log(myText.toFixed() + 25);
    }

    // console.log(object);
  }


  gretting(123, 'L');
  // gretting(123, 'l');


})();
