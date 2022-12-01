
let people={friends:[]}
let person1={Name:"Onur", Surname:"Mok", id:0};
let person2={Name:"Ana", Surname:"Acevska", id:1};
let person3={Name:"Gjorgji", Surname:"Sirakoski", id:2};
people.friends.push(person1,person2,person3);
//people={friends:[person1,person2,person3]};


console.log(people.friends[0]);
console.log(people.friends[1]);
console.log(people.friends[2]);


for(let i=0; i<people.friends.length;i++)
{
    console.log(people.friends[i]);
}