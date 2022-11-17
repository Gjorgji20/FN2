/*var Name=prompt("Insert name and surname");

console.log(Name);
alert("Your name is "+Name);
*/
/*bdkfnbmfd
vjkrnbmkdf
nksdklvnmdfb
nfkbfbkdf*/

let randomNum=Math.floor(Math.random()*3)+1;
setInterval(10000);
console.log(randomNum);

let num=prompt("Guess a number");
num=parseInt(num);
if(!isNaN(num))
{
  
    while(randomNum!=num)
    {
        num=prompt("Guess a number");
        num=parseInt(num);
        if(isNaN(num))
        {
            alert("Incorect input");
        }
    }
    alert("You guess! The number is "+ randomNum);
}
else
{
    alert("incorect input")
}