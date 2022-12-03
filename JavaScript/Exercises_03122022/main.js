
//Arrays
const arrayOfString=["Gjorgji", "Onur", "Ana", "Filip"];
console.log(arrayOfString[0]);
console.log(arrayOfString.indexOf("Onur"));

const partOfArray=arrayOfString.slice(2, arrayOfString.length)

console.log(partOfArray);
console.log(arrayOfString[arrayOfString.length-1]);


arrayOfString.sort();
console.log(arrayOfString);
arrayOfString.reverse();
console.log(arrayOfString);


let arrayOfNumbers=[5,4,3,6,8];

console.log("Random"+arrayOfNumbers[Math.floor(Math.random()*arrayOfNumbers.length)])
arrayOfNumbers.sort();

console.log(arrayOfNumbers);

let max=arrayOfNumbers[0];
let min=arrayOfNumbers[0];
for(let i=1;i<arrayOfNumbers.length;i++)
{
    if(max>arrayOfNumbers[i])
    {
        max=arrayOfNumbers[i];
    }

    
    if(min<arrayOfNumbers[i])
    {
        min=arrayOfNumbers[i];
    }
}
console.log(max);
console.log(min);

arrayOfString.push("Simona");
console.log(arrayOfString);

//Objects

let Person={Name:"Gjorgji", Surname:"Gjorgji", Age:"26", City:"Skopje"}

console.log(Person);
console.log(Person.Name+", "+Person.Surname+", "+
Person.Age+", "+Person.City)

delete Person.City;
console.log(Person);


console.log(Person.Age.length);


const Book={Name:"BOOK1", AuthorName:"AUTHOR1", readingStatus:true};
console.log(Book.readingStatus);


const Book2={Name:"BOOK1", AuthorName:"AUTHOR1", readingStatus:true};
const Book3={Name:"BOOK1", AuthorName:"AUTHOR1", readingStatus:true};


const arrayOfObject=[Book,Book2,Book3];
const Book4={Name:"BOOK1", AuthorName:"AUTHOR1", readingStatus:true};

arrayOfObject.push(Book4);
console.log(arrayOfObject[0].Pages);


const recipe={
    Title:"Bolognese",
    Servings:4,
    Ingrediens:["Pasta","Salt", "Tomato"]
}
console.log(recipe);


const information={
    Int1:5,
    Int2:8,
    Int3:1
}
console.log(information);