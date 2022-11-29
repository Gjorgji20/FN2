const shoppingList=[];
shoppingList.splice(0,0,"Milk","Bread","Apples")

shoppingList.splice(1,1,"Bananas", "Eggs");

let deletedValues=shoppingList.pop();

console.log(deletedValues);
console.log(shoppingList);
console.log(shoppingList.sort());

console.log(shoppingList.indexOf("Milk"));
shoppingList.splice(1,0,"Carrots","Lettuce");

let newArray=["Juice","Pop"]
let combArray=shoppingList.concat(newArray);
let combArray1=combArray.concat(newArray);

console.log(combArray1.lastIndexOf("Pop"));
console.log(combArray1);


//
let array=[1,2,3];

let arrayOfArray=[array,array,array];
console.log(arrayOfArray[1][1]);

