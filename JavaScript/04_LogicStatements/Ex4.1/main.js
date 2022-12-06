let expression=prompt("Insert 1/0 value");
expression=parseInt(expression);
expression=Boolean(expression)

Test(expression);
function Test(expression)
{

    if(expression)
    {
        alert("I'm true");
        console.log("I'm true");
    }
    else
    {
        alert("I'm not true");
        console.log("I'm not true");
    }
    if(!expression)
    {
        alert("I'm true");
        console.log("I'm true");
    }
    else
    {
        alert("I'm not true");
        console.log("I'm not true");
    }

}


