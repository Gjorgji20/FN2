//11.1
let colorMode=true;
window.onclick=change;

function change(){
    if(colorMode)
    {
        colorMode=false;
    }else
    {
        colorMode=true;
    }

    if(colorMode)
    {
        document.body.style.background="white";  
        document.body.style.color="black";  
    }
    else
    {
        document.body.style.background="black";
        document.body.style.color="white";  

    }
}

//11.2

document.getElementById("d1").addEventListener("click",function (){this.style.background="red"})
document.getElementById("d2").addEventListener("click", function(){this.style.background="blue"})
document.getElementById("d3").addEventListener("click",function(){this.style.background="green"})

//11.3
function message(msg,obj)
{
    console.log(msg);
    console.log(obj);
}
window.onload=function(){message("ready",this)}
window.addEventListener("DOMContentLoaded",function(){message("readyy",this)})

//11.4
let c=document.getElementById("color");
c.addEventListener("mousedown",test)
c.addEventListener("mouseover",function(){this.style.background="red"})
c.addEventListener("mouseout",function(){this.style.background="yellow"})
c.addEventListener("mouseup",function(){this.style.background="blue"})

function test()
{
    event.target.style.background="green";
}
//11.5
let ip=document.getElementById("ip")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
const log=[];
function captureEvent()
{
    
}
//11.6
let box0=document.getElementById("box0")
let box1=document.getElementById("box1")
let box2=document.getElementById("box2")
let box3=document.getElementById("box3")
let container=document.getElementById("container")
container.addEventListener("click",function(){alert("Container")},false);
box0.addEventListener("click",function(){alert("0"),false});
box1.addEventListener("click",function(){alert("1")},false);
box2.addEventListener("click",function(){alert("2")},false);
box3.addEventListener("click",function(){alert("3")},false);

container.addEventListener("click",function(){alert("Container")},true);
box0.addEventListener("click",function(){alert("3"), true});
box1.addEventListener("click",function(){alert("3")},true);
box2.addEventListener("click",function(){alert("3")},true);
box3.addEventListener("click",function(){alert("3")},true);

document.getElementById("main").addEventListener("click",function(e){ alert(e.target)});
document.getElementById("child").addEventListener("click",function(){alert(event.target)});

//11.7
document.getElementById("first").oninput=onChange;
document.getElementById("last").onchange=onChange;
document.getElementById("last").onfocus=onChange;

function onChange()
{
    alert(event.key);
    document.getElementById("output1").textContent= this.value;
    //document.getElementById("output1").textContent= "this.value";
}
//11.8
document.getElementById("last1").onkeydown=isNumber;
document.getElementById("last1").onkeyup=function(){console.log(this.value)};
document.getElementById("last2").onkeyup=function(){console.log(this.value)};
document.getElementById("last2").onpaste=function(){console.log("paste");};
document.getElementById("last1").onpaste=function(){console.log("paste");};
function Ok()
{
    if(isNaN(event.key))
    {
       return false;
    }
    return true;
}
function isNumber()
{
    if(isNaN(event.key))
    {
        alert("Insert number");
    }
}
//11.10
j=0;
function test(event)
{
    let obj={name:"", last:"", age:0};
    let error=false
     for(let i=0;i<document.getElementById("t").children.length;i++)
    {

        
        if(document.getElementById("t").children[i].getAttribute("type")=="text")
        {
            if(document.getElementById("t").children[i].id=="f")
            {
                obj.name=document.getElementById("t").children[i].value;
            }else if(document.getElementById("t").children[i].id=="l")
            {
                obj.last=document.getElementById("t").children[i].value;
            }else
            {
                if(!isNaN(document.getElementById("t").children[i].value))
                {
                    obj.age=document.getElementById("t").children[i].value;

                }else
                {
                    error=true;
                }
            }
        }
    }
    if(!error)
    {
        event.preventDefault();
        console.log("propagation set")
        document.getElementById("sub").addEventListener("click", Ok);
        
    }

}
function Ok()
{
    alert("itsok")
}

function d(event)
{
    alert("Div");
    event.preventDefault();
    document.getElementById("bb").addEventListener("click",b);
}
function b()
{
    alert("Button");
}