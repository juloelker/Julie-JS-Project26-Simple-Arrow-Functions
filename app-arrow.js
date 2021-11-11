/*convert function to arrow function
 *built this set of arrow functions in Nov 2021
 *from the Arrow functions lesson of Traversy
 *Media course, Modern JS from the Beginning, Udemy.
 *Goes with the index-arrow.html file.*/
/*
const sayHello = function () {
  console.log('Hello');
};

sayHello();
*/

/*shorter
const sayHello = () => {
  console.log('Hello');
};*/

//shortest, single-line function no {} needed
const sayHello = () => console.log('Hello');
sayHello();

/*return with the keyword, then without*/
//with
const sayHelloClare = () => {
  return 'Hello Clare';
};
console.log(sayHelloClare());

//without
const sayHelloJulie = () => 'Hello Julie';
console.log(sayHelloJulie());

/*object literal, won't work, returns undefined
JS tries to read {} as a function
const sayHelloAnybody = () => {
  msg: 'Hello Anybody'
};
console.log(sayHelloAnybody());*/

/*object literal, use ({}), returns an object*/
const sayHelloAnybody = () => ({
  msg: 'Hello Anybody',
});
console.log(sayHelloAnybody());

/*with a parameter, single parameter, no () needed*/
const sayHelloYou = name => console.log(`Hello ${name}`);
sayHelloYou('Julie');

/*multiple params/arguments need the () */
const sayHelloFirstLast = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
sayHelloFirstLast('Julie', 'Oelker');

/*Function with callback from map(), before arrow function */
const users = ['Vince', 'Julie', 'Mary', 'Rebecca'];

let nameLength = users.map(function (names) {
  return names.length;
});
console.log(nameLength);

/*after convert to arrow function, did this one 
without watching the video, yay! 
Small victory here, folks, small victory.*/
nameLength = users.map(name => name.length);
console.log(nameLength);
