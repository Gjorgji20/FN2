
let max=parseInt(prompt("Max"));

let random=Math.floor(Math.random()*max+1);
console.log(random);
let userNo=parseInt(prompt("Number"));
let i;

if(userNo!=random)
{
    i=0;
}else
{
    console.log("you guess")
    i=1;
}
while(i!=1)
{
    let userNo=parseInt(prompt("Number"));
    if(userNo==random)
    {
        console.log("you guess", userNo)
        i=1;
    }
}

