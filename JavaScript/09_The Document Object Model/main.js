//9.1
console.dir(window.document);
console.dir(window.innerWidth+ "px; " + window.innerHeight+"px.");

//9.2
console.dir(window.location.href);
console.dir(window.location.protocol);

//9.3
document.querySelector(".output").textContent="Test";
document.querySelector(".output").classList.add("Test");
document.querySelector(".output").id="firstQuery";
document.querySelector(".Test").style.background="red";
document.querySelector(".Test").textContent=document.URL;

//9.4

let secondOutput=document.querySelectorAll("li");
console.log(secondOutput.length);
console.log(document.querySelector("#one").id);

const mainList={id:document.querySelector("#one").id};
for(let i=0; i<secondOutput.length;i++)
{
    if(secondOutput[i].id==mainList.id)
    {
        secondOutput[i].id="mainList";
    }
}

let tagN=document.querySelectorAll("div");
const tagnames=[];
let j=0;
for(let i=1;i<tagN.length;i++)
{
   
       tagnames[j]= tagN[i].tagName;
       j++;
    
}
console.log(tagnames);


for(let i=0;i<tagN.length;i++)
{
   
    tagN[i].id=i.toString();
    tagN[i].style.color="blue";
    tagN[i].style.background="red";

    
}
