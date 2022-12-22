let niza=["Strong", "Smart", "Fast", "Beautiful"]

console.log(userName());
function userName()
{
    let Name=prompt("Your name");
    let no=Math.floor(Math.random()*niza.length);
    console.log(no);
    return Name+","+ niza[no];
}
