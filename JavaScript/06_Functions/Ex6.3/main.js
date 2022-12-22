let no1=parseInt(prompt("Number1"));
let no2=parseInt(prompt("Number2"));
let operation=prompt("operation");

function calculate(no1,no2,operation)
{
    let result;
    if(!isNaN(no1) && !isNaN(no2))
    {
        if(operation==="-")
        {
                result=Math.abs(no1-no2);
        }else if(operation==="*")
            {
                result=no1*no2;
            }else if(operation==="/")
            {
                result=no1/no2;
            }else
            {
                result=no1+no2
            }
            return result;
    }else
    {
        return "Invalid number";
    }

 
}

console.log(calculate(no1,no2,operation));