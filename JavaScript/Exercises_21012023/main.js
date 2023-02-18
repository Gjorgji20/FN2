// 1. Date
// const d=new Date();
// let day=d.getDay();
// let month=d.getMonth();
// let year=d.getFullYear();

// let dayBorn=parseInt(prompt("Insert Day"));
// let monthBorn=parseInt(prompt("Insert Month"));
// let yearBorn=parseInt(prompt("Insert Year"));

// console.log(Math.abs(day-dayBorn), Math.abs(month-monthBorn),Math.abs(year-yearBorn));


//2. Capitalize letter of each word

// let sentence=prompt("Insert text");

// console.log(CapitalizeAllWord(sentence));

// function CapitalizeAllWord(sentence)
// {
//     let sentenceWithCapitalizeWord=[];
//     let j=0;
//     let i=1;
//     let word=sentence[0].toUpperCase();
//     while(i<sentence.length)
//     {
    
//         if(sentence[i]!=" " && (sentence[i]-1)==" " && word=="")       
//         {
//             word+=sentence[i].toUpperCase();
//             i++;
//         }else if(sentence[i]!=" " && (sentence[i]-1)!=" " && i!=sentence.length)
//         {
//             word+=sentence[i];
//             i++;
//         }else if(i==sentence.length )
//         {
//             sentenceWithCapitalizeWord[j]=word;
//             break;
//         }
//         else if(sentence[i]==" " && i!=sentence.length )
//         {
//             sentenceWithCapitalizeWord[j]=word;
//             j++;
//             i++;
//             word=sentence[i].toUpperCase();
//         }
        
//     }
//     return sentenceWithCapitalizeWord;
// }

//3. Dali go ima Java zborot na pocetok

// let sentence=prompt("Insert");

// let subrsting=sentence.substring(0,4);
// if(subrsting==="Java")
// {
//     console.log("Yes");
// }else
// {
//     console.log("No");
// }

//4. Dali e so minus ili so plus, produkt so minus ili so plus

// let no1=parseInt(prompt("No1"));
// let no2=parseInt(prompt("No2"));
// let no3=parseInt(prompt("No3"));

// SingProduct(no1,no2,no3);

// function SingProduct(no1,no2,no3)
// {
//     let product=1;
//     if(!isNaN(no1) && !isNaN(no2) && !isNaN(no3))
//     {
//     product=no1*no2*no3
    
//     if(product>0)
//     {
//         console.log("+")
//     }else
//     {
//         console.log("-");
//     }
//     }

// }

//5 Da se vrati ocenkata

// const o1={Name:"David", Marks:80};
// const o2={Name:"Vinoth", Marks:77};
// const o3={Name:"Divya", Marks:88};
// const o4={Name:"Ishitha", Marks:95};
// const o5={Name:"Thomas", Marks:68};

// const niza=[o1,o2,o3,o4,o5]
// let suma=0;
// for(let i=0;i<niza.length;i++)
// {
//  suma=suma+ niza[i].Marks;
// }
// if(suma/niza.length <60)
// {
//     console.log(suma/niza.length,"F");
// }else if(suma/niza.length <70)
// {
//     console.log(suma/niza.length,"D");
// }else if(suma/niza.length <80)
// {
//     console.log(suma/niza.length,"C");
// }else if(suma/niza.length <90)
// {
//     console.log(suma/niza.length,"B");
// }else if(suma/niza.length <60)
// {
//     console.log(suma/niza.length,"A");
// }

//6. Obraten redosled


// let text=prompt("Insert test");
// let reversetext="";

// for(let i=text.length-1; i>=0;i--)
// {
//     reversetext+=text[i];
// }

// console.log(reversetext);



//8. broj na stepen
//  let no=prompt("Insert no");
//  let exponent=prompt("Insert exponent");

//  console.log(Proizvod(no,exponent));

//  function Proizvod(no,exponent)
//  {
//     let res=1;
//     for(let i=1;i<=exponent;i++)
//     {
//        res*=no;
//     }
//     return res;
//  }

//9. Sporedba datumi

// let date=new Date('11/14/2023 00:00');
// let date1=new Date('11/15/2023 00:00');


// if(date>date1)
// {
//     console.log("less")
// }else if(date<date1)
// {
//     console.log("grether")
// }else
// {
//     console.log("equal")
// }

// 10. array.forEach(element => {
    
// // });
//  const toppings = ['Mushrooms', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chilles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];
// toppings.forEach(e=>console.log(e))

// toppings.forEach(myFunction);


// function myFunction(item, index) {
//   console.log(item)
// }
//11 forEach() -object

// const courses = {
//     java: 10,

//     javascript: 55,

//     nodejs: 5,

//     php: 15
// };

// const key=Object.keys(courses);

// key.forEach(e=>console.log(e))

//12 
// const animals = {
//     tiger: 1,

//     cat: 2,

//     monkey: 3,

//     elephant: 4
// };

// const key=Object.keys(animals);
// key.forEach(e=>console.log(e))