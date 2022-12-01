const items=[];
let item1={name:"Item1", model:"model1", cost:1, quantity:1}
let item2={name:"Item2", model:"model2", cost:2, quantity:2}
let item3={name:"Item3", model:"model3", cost:3, quantity:3}


for(let i=0;i<3;i++)
{
    items[i]=item1;
}

for(let i=0; i<items.length;i++)
{
    console.log(items[i]);
}

console.log(items[items.length-1].quantity);