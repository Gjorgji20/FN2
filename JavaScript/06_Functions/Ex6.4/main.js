// function sum(n1,n2)
// {
//     return n1+n2;
// }
// //anonimna funkcija
// let s=function (n1,n2)
// {
//     return n1+n2;
// }
// //nema return bidejki e eden red, se e return
// let suma=(n1,n2)=> n1+n2;
// console.log(suma(5,4));

// let niza=[];
// let niza1=[];
// for(let i=0;i<10;i++)
// {
//     let a=i*5;
//     let b=i*i;
   
//     let res=addToNumbers(a,b);
//     niza[i]=res;
//     niza1.push(res);
// }
// function addToNumbers(i,j)
// {

//     return i+j;
// }
// console.log(niza);
// console.log(niza1);

// class Person 
// {
//     #Name;
//     #Surname;

//     constructor(name, surname)
//     {
//         this.#Name=name;
//         this.#Surname=surname;
//     }

//     get getName()
//     {
//         return this.#Name;
//     }
//     set setName(name)
//     {
//         this.#Name=name;
//     }

    
//     get getSurname()
//     {
//         return this.#Surname;
//     }
//     set setSurname(surname)
//     {
//         this.#Surname=surname;
//     }

//     getData()
//     {
//         return this.#Name+" "+ this.#Surname
//     }
// }

// const P=new Person("Simona", "Dimeska");
// P.setName="Soki";
// P.setSurname="dimesk"

// console.log(P.getData);
// console.log(P.getSurname);
// console.log(P.getData());

// console.log("-----------------------------------------");

// class Per 
// {
//     #Name;
//     #Surname;

//     constructor(name, surname)
//     {
//         this.#Name=name;
//         this.#Surname=surname;
//     }


//     getData()
//     {
//         return this.#Name+" "+ this.#Surname
//     }
// }


// const p=new Per("Simona", "Dimeska");


// console.log(p.name);
// console.log(p.surname);
// console.log(p.getData());


// // function faktoriel(n)
// // {   let faktoriel=1;
// //     if (n==1)
// //     {
// //         return;
// //     }else
// //     {
// //         faktoriel=faktoriel*n;
// //         faktoriel(n--);
// //     }
// // }

// // console.log(faktoriel(5));

// class Person{
//     #Name;
//     #Surname;

//     constructor(param1,param2)
//     {
//         this.SetName=param1
//         this.SetSurname=param2
//     }

//     get GetName()
//     {
//         return this.#Name;
//     }
//     get GetSurname()
//     {
//         return this.#Surname;
//     }
//     set SetName(p)
//     {
//         this.#Name=p;
//     }
//     set SetSurname(p)
//     {
//         this.#Surname=p;
//     }

//     setData()
//     {
//         this.SetName="setirano vnatre"
//         this.SetSurname="Setirano vantre"

//         this.vratiData()
//     }
    
//     setData1()
//     {
//         this.SetName="setirano vnatre "
//         this.SetSurname="Setirano vantre"

//         this.vratiDataProp()
//     }
//     vratiData()
//     {
//         let data=this.#Name+" "+this.#Surname;
//         return data
//     }
    
//     vratiDataProp()
//     {
//         let data=this.GetName+" "+this.GetSurname;
//         return data
//     }
// }

// const P=new Person();
// P.SetName="Simona";
// P.SetSurname="Dimeska";
// console.log(P.vratiData());
// console.log(P.vratiDataProp());



// const p=new Person("Gjorgji", "Sirakoski");

// console.log(p.vratiData());
// console.log(p.vratiDataProp());

// class T  extends Person
// {
//     constructor(name,surname, a) 
//     {
//         super(name, surname)
//         this.a=a;
//     }
// }

// const t=new T("Simona", "Dimeska", 23)
// console.log(t.vratiData());
// console.log(t.vratiDataProp()); 
// console.log(t.a); 


// class a{
//     #test

//     constructor(vrednost)
//     {
//         this.sV=vrednost
//         //this.#test=vrednost
 
//     }


//     get gV()
//     {
//         return this.#test
//     }

//     set sV(vr)
//     {
//     this.#test=vr
//     }

//     vratiF()
//     {
//         return this.#test
//     }
//     vratiP()
//     {
//         return this.gV;
//     }

//     smeniV(v)
//     {
//        // this.sV=v;
//        this.#test=v;
//     }
// }

// const v1=new a();
// v1.sV="Simona"
// console.log(v1.gV);
// console.log(v1.vratiF());
// console.log(v1.vratiP());

// v1.smeniV("Gjorgji")
// console.log(v1.gV);
// console.log(v1.vratiF());
// console.log(v1.vratiP());

// const v2=new a("Simona")
// v2.sV="Gjorji"
// console.log(v2.gV);
// console.log(v2.vratiF());
// console.log(v2.vratiP());

// class B extends a
// {
  
//     #a
//     constructor(v,v1)
//     {
//         super(v1)
//         this.#a=v
//     }
//     get G()
//     {
//         return this.#a
//     }
// }
// const c=new B("vrevr","aaaaa")
// console.log(c.gV);
// c.sV="bbbbbbbb"
// console.log(c.gV);
// console.log(c.G);


class Rectangle
{
    #a
    #b
    constructor(siteA,siteB)
    {
        this.setA=siteA;
        this.setB=siteB
    }

    get getA()
    {
        return this.#a
    }
    set setA(a)
    {
        this.#a=a
    }

    
    get getB()
    {
        return this.#b
    }
    set setB(b)
    {
        this.#b=b
    }

    area()
    {
        let c=this.getA*this.getB
        return c;
    }
}
const rectangle=new Rectangle();
rectangle.setA=5;
rectangle.setB=2;

console.log(rectangle.area());

class Square extends Rectangle
{
    constructor(a,b)
    {
        super(a,b)
    }
}
const square=new Square();
square.setA=5;
square.setB=5;
console.log(square.area());

const sq=new Square(5,5)
console.log(square.area());
console.log("------------------------")

class Car
{
    #name
    get gName()
    {
        return this.#name
    }
    set sName(name)
    {
        this.#name=name;
    }
    #year
    get gYear()
    {
        return this.#year
    }
    set sYear(year)
    {
        this.#year=year
    }
    #manufacturer
    get gManufacturer()
    {
        return this.#manufacturer
    }
    set sManufaturer(manufacturer)
    {
        this.#manufacturer=manufacturer
    }

    constructor(a,b,c)
    {
        this.sName=a
        this.sYear=b
        this.sManufaturer=c
    }

    print()
    {
        console.log(this.gName);
        console.log(this.gYear);
        console.log(this.gManufacturer);
    }

}

const car=new Car();
car.sName="Spark"
car.sYear=2008
car.sManufaturer="SHWVEOLETE"
car.print();
console.log("------------------------")

const c=new Car("gsdrf","Hrhre", "herh")
c.print();
console.log("------------------------")
class Book
{
    #title
    get gT()
    {
       return this.#title;
    }
    #discard
    set sD(d)
    {
        this.#discard=d;
    }
    get gd()
    {
        return this.#discard;
    }
    constructor(a,b,c,d,e,f,g)
    {
        this.#title=a;
        this.autor=b;
        this.date=c;
        this.isbn=d;
        this.page=e;
        this.cheked=f;
        this.sD=g;
    }
    print()
    {
        console.log(this.title);
        console.log(this.autor);
        console.log(this.date);
        console.log(this.isbn);
        console.log(this.page);
        console.log(this.cheked);
        console.log(this.discarded);
    }
}
const manual=new Book("sss","grg",2013,"000000000",1147,1,"No");
const manual1=new Book("sss","grg",2013,"000000000",1147,1,"No");
const manual2=new Book("sss","grg",2013,"000000000",1147,1,"No");
const manual3=new Book("sss","grg",2013,"000000000",1147,1,"No");
const manual4=new Book("test","grg",2013,"000000000",1147,1,"No");
const manual5=new Book("sss","grg",2013,"000000000",1147,1,"No");
manual.print();

console.log("-----------------------");


class Library
{
    constructor(a)
    {
        this.niza=a
    }
    getBookList(bookname,a)
    {
        for(let i=0;i<this.niza.length;i++)
        {
            if(this.niza[i].gT===bookname)
            {
                console.log("exist")
                this.niza[i].sD="yes";
                this.niza[i].autor="GJORGJI"
                console.log(this.niza[i].gd)
                console.log(this.niza[i].autor)
                
              //  console.log(this.niza[i].);

            }
        }
    }
    issueBook()
    {  
        for(let i=0;i<this.niza.length;i++)
        {  
               console.log(this.niza[i]);

        }
        
    }

    returnBook(bookname)
    {
        for(let i=0;i<this.niza.length;i++)
        {
            if(this.niza[i].gT===bookname)
            {
                console.log("exist")
                console.log(this.niza[i].autor);
            }
        }
    }
}
const niza=[];
niza[0]=manual;
niza[1]=manual1;
niza[2]=manual2;
niza[3]=manual3;
niza[4]=manual4;
niza[5]=manual5;

const l=new Library(niza);
l.getBookList("test","Ff");
console.log("---------------------------");
l.returnBook("test");
console.log("---------------------------");
l.issueBook();
