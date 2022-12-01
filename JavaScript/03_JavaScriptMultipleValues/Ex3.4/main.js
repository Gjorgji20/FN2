let myCar={
    model:"Yugo",
    tyre:4,
    working:true,
    year:2012,
    color:'green'   
}
console.log(myCar.color);
let prop="color";
myCar[prop]="Red";
console.log(myCar.color);
prop="forSale";
myCar[prop]=true;

console.log(myCar);
