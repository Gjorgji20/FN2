//10.1
let childElement=document.body.children;
console.log(childElement);
let childN=document.body.childNodes;
console.log(childN)
//10.2

document.getElementById("name").style.color="red";
//10.3
const links=document.getElementsByTagName("a");

let middleElement=Math.floor(links.length/2);
console.log(middleElement);
links[middleElement].style.color="green";

//10.4

const classCollection=document.getElementsByClassName("byClass");

for(let i=0;i<classCollection.length;i++)
{
    if(i==classCollection.length-1)
    {
        
    classCollection[i].style.background="yellow";
    }
}
//10.5

document.querySelector(".byClass").style.color="purple"
//10.6
for(let j=0; j<document.querySelectorAll(".byClass").length;j++)
{
    console.log(document.querySelectorAll(".byClass")[j]);
}
//10.7
function message(btn)
{
    alert(btn.innerHTML);
}
// //10.8
// const names=["Simona", "Gjorgji", "Ivona", "Mihaela"];
// const msg=document.getElementById("msg");
// window.onload=build();

// function build()
// {
//     let tbl=document.getElementById("html");
//     for(let i=0;i<names.length;i++)
//     {
//         tbl.innerHTML=tbl.innerHTML+`<tr><td>${names[i]}</td></tr>`
//     }
//     tbl.children.item(0).classList="box";
//     console.log(tbl.children);
// }
//10.9
document.getElementById("btn").addEventListener("click",output);
function output()
{
  alert(this.innerHTML);
  this.innerHTML="Test1"
}