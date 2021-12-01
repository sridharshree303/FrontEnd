// let a=2;
// console.log(a);
let str="PrAjWaL";
let a=str.toLocaleLowerCase();
console.log(a);
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());

let b=["qspiders","mobile","jspiders","pyspiders","lol","rofl","raj","linga"];
console.log(b);
for (const element in b) {
    if (b.includes("jspiders")) {
        
        console.log("element is present at " +b.indexOf("jspiders")+" index");   
    }
    else
    {
        console.log("element is not present");
        b.splice(2,"jspiders");
    }
}
// console.log(b);