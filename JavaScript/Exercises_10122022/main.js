// console.log("//1")
// let no1=parseInt(prompt("No1"));
// let no2=parseInt(prompt("No2"));

// if(no1>no2)
// {
//     console.log(no1);
// }else
// {
//     console.log(no2);
// }
// console.log("//2", no1)

// if(no1%2==0)
// {
//     console.log("paren e");
// }else
// {
//     console.log("neparen e");
// }
// console.log("//3")

// let no3=parseInt(prompt("no3"));
// if(!isNaN(no3))
// {
//     console.log("Broj e")
// }else
// {
//     console.log("ne e broj");
// }
// console.log("//4")


// let no4=parseInt(prompt("No1"));
// let no5=parseInt(prompt("No2"));
// if(no4==no5)
// {
//     console.log("are equal");
// }else 
// if(no4>no5)
// {
//     console.log(no4);
// }else
// {
//     console.log(no5);
// }
// console.log("//5")

// let no7=parseInt(prompt("No7"));
// let no8=parseInt(prompt("No8"));
// let no9=parseInt(prompt("No9"));
// let max=0;
// if(no7>no8)
// {
//     max=no7;
// }else
// {
//     max=no8;
// }
// if(max<no9)
// {
//     max=no9
// }
//console.log(max);
// console.log("//6")
// let no7=parseInt(prompt("No7"));
// let no8=parseInt(prompt("No8"));
// let no9=parseInt(prompt("No9"));
// if(no7==no8 && no7==no9)
// {
//     console.log("Equilateral triangle")
// }else if(no7==no8 || no8==no9)
// {
//     console.log("Isosceles  triangle")
// }else
// {
//     console.log("Scalene triangle.")
//}
//  console.log("//7")

// let x1=parseInt(prompt("x1"));
// let x2=parseInt(prompt("x2"));
// let x=parseInt(prompt("x"));
// if(x1<=x && x<=x2)
// {
//  console.log("Between the range")  
// }else
// {
//     console.log("outside the range")
// }
// console.log("//8")

// let operation=prompt("oper");
// let x3=parseInt(prompt("x3"));
// let x4=parseInt(prompt("x4"));
// let res=0;
// switch(operation)
// {
//     case "add":
//         res=x3+x4;
//         break;
//         case "subtract":
//         res=x3-x4;
//         break;
//         case "multiply":
//         res=x3*x4;
//         break;
        
//         case "divide":
//         res=x3/x4;
//         break;
        
//         case "modulus":
//         res=x3%x4;
//         break;
//         default:
//             console.log("Invalid opretation")
// ;}
//console.log(res)
// console.log("//9")


// let x5=parseInt(prompt("x5"));

// if(x5>90 && x5<=100)
// {
//     console.log("S grade")
// }else if(x5>80 && x5<=90)
// {
//     console.log("A grade")
// }else if(x5>70 && x5<=80)
// {
//     console.log("B grade")
// }else if(x5>60 && x5<=70)
// {
//     console.log("C grade")
// }else if(x5>50 && x5<=60)
// {
//     console.log("D grade")
// }else if(x5>40 && x5<=50)
// {
//     console.log("E grade")
// }else
// {
//     console.log("Invalid marks");
// }

// console.log("switch 1");
// let no=parseInt(prompt("Day as number"));
// switch (no)
// {
//     case 1:
//         console.log("Mon")
//         break;    
//         case 2:
//             console.log("Thu")
//             break;
            
//     case 3:
//         console.log("Wed")
//         break;
        
//     case 4:
//         console.log("Thr")
//         break;
        
//     case 5:
//         console.log("Fri")
//         break;
        
//     case 6:
//         console.log("Sat")
//         break;
        
//     case 7:
//         console.log("Sun")
//         break;
//     default:
//         console.log("Invalid")
// }

// console.log("switch 2")
// let godina=2022;
// let no=parseInt(prompt("Day as number"));
// switch (no)
// {
//     case 1:
//         console.log("31")
//         break;    
//         case 2:
//             if(godina%4==0 && godina%100!=0) || godina%400==0)
//             {
//                 console.log("29")
//             }else
//             {
//                 console.log("28")
//             }
//             console.log("Thu")
//             break;
            
//     case 3:
//         console.log("31")
//         break;
        
//     case 4:
//         console.log("30")
//         break;
        
//     case 5:
//         console.log("31")
//         break;
        
//     case 6:
//         console.log("30")
//         break;
        
//     case 7:
//         console.log("31")
//         break;

//         case 8:
//         console.log("31")
//         break;
//         case 9:
//         console.log("30")
//         break;
//         case 10:
//         console.log("31")
//         break;

//         case 11:
//         console.log("30")
//         break;
//         case 12:
//         console.log("31")
//         break;
//     default:
//         console.log("Invalid")
// }

// console.log("switch 4")


//  let n0 = 5;
// switch (true) {
//     case (n0 < 5):
//         console.log("Number is very low");
//         break;
//     case (n0 < 10):
//         console.log("Number is low");
//         break;
//     case (n0 > 100):
//         console.log("Number is high");
//         break;
//     default:
//         console.log("Number is medium")
// }

// console.log("switch 5")
// let n0 = 100;
// switch (n0) {
//   case 0:
//   case 5:
//   case 6:
//     console.log("Number is low");
//     break;
//   case 100:
//     console.log("Number is high");
//     break;
//   default:
//     console.log("I don't know the number");
// }

let a=Math.floor(Math.random()*11);

switch(a)
{
    case 1:
        console.log("Number is:"+a)
        break;    
        case 2:
          
            console.log("Number is:"+a)
            break;
            
    case 3:
        console.log("Number is:"+a)
        break;
        
    case 4:
        console.log("Number is:"+a)
        break;
        
    case 5:
        console.log("Number is:"+a)
        break;
        
    case 6:
        console.log("Number is:"+a)
        break;
        
    case 7:
        console.log("Number is:"+a)
        break;

        case 8:
        console.log("Number is:"+a)
        break;
        case 9:
        console.log("Number is:"+a)
        break;
        case 10:
        console.log("Number is:"+a)
        break;
    default:
        console.log("System error");
}