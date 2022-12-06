let randomNumber=Math.floor(Math.random()*6);
let userMessage=prompt("Will I have be a prograamer");
let answer="";
console.log(randomNumber);
switch(randomNumber)
    {
        case 0:
            answer="YES";
            break;
        
        case 1:
            answer="NO";
            break;
        case 2:
            answer="Maybe";

            break;
        case 3:
            answer="It's ok";

            break;
        case 4:
            answer="You are at the right way";
            break;
        case 5:
            answer="True";

            break;
        default:
            answer="Random ";

            break;
    }
    console.log(userMessage+" "+answer)