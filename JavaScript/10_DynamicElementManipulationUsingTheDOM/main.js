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

//10.10
class Person{
    constructor(Number,Name)
    {
        this.Number=Number;
        this.Name=Name;
        this.Vote=0;
    }
}

const Names=["Gjorgji","Simona", "Ivona", "Bojan", "Mihaela", "Petar", "Sara", "Martin"]
const myFriends=[];

window.onload=createTable(Names);
function createTable(Names){

for(let i=myFriends.length;i<Names.length;i++){
    myFriends[i]=new Person(i+1,Names[i])   
    
    let tbl=document.getElementById("outputPeople");
    let newRow=document.createElement("tr");
    newRow.addEventListener("click", counter)
    let cellData=document.createElement("td");
    let cellDataName=document.createElement("td");
    let cellDataVote=document.createElement("td");
    cellData.innerText=myFriends[i].Number;
    cellDataName.innerText=myFriends[i].Name;
    cellDataVote.innerText=myFriends[i].Vote;
    newRow.appendChild(cellData);
    newRow.appendChild(cellDataName);
    newRow.appendChild(cellDataVote);
    tbl.appendChild(newRow);
}
}
function counter()
{
    this.children[2].innerHTML=parseInt(this.children[2].innerHTML)+1;
    console.log(this.children[2].innerHTML);
}
console.log(document.getElementById("addFriend").value)
let btnAdd= document.getElementById("addNew");
btnAdd.addEventListener("click", SaveData);
function SaveData()
{
    if(document.getElementById("addFriend").value !="")
    {
        Names[Names.length]=document.getElementById("addFriend").value;
        createTable(Names);
        document.getElementById("addFriend").value="";
        alert("The Person was added succesfully");
    }else
    {
        alert("Input value cannot be empty")
    }
}