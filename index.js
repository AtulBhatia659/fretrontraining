/*let firstName = "xyz";
let age=21;
age=age+1; 
let student = true;
console.log("Hello",firstName);
console.log("You are",age);
console.log("Enrolled",student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled " + student;

let username;
 document.getElementById("mybutton").onclick = function(){
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = username;
 
  const PI = 3.14;
  let radius 
  let circumference;

  radius = window.prompt("Enter the radius of the circle");
  radius=Number(radius);
  circumference= 2 * PI * radius;

  console.log("The circumference is " + circumference);
  
 let count = 0;
 document.getElementById("firstbutton").onclick = function(){
    count-=1;
    document.getElementById("countlabel").innerHTML = count;
 }
 document.getElementById("secondbutton").onclick = function(){
    count = 0;
    document.getElementById("countlabel").innerHTML = count;
 }
 document.getElementById("lastbutton").onclick = function(){
    count+=1;
    document.getElementById("countlabel").innerHTML = count;
 }
 
let area;
let width;
let length;

width=window.prompt("Enter width");
lenght=window.prompt("Enter length");

area= getArea(width,length);
console.log("The area is:",area);

function getArea(width,length){
   let result = width*length;
   return result;
}

let alpha = ["a" , "b" , "c" , "d"];
alpha = alpha.sort().reverse();
for(let number of  alpha){
   console.log(number);
}

//let total = sum(x,y)
let num = [3 , 5 , 4 , 8 , 7];

num.forEach((element)=>{
   console.log(element*element)
})

let arr = [45 , 23 , 67]
let a = arr.map((element , index , array)=>{
   console.log(element , index , array)
   return element+ index;
})
console.log(a);

//filter method
let arr = [34 , 83, 67 , 8 , 16 , 12]
let a = arr.filter((element)=>{
return element < 20;
})
console.log(a);

 //reduce array method
let arr2 = [1,2,3,4,5]
let b = arr.reduce((h1, h2)=>{
   return h1 + h2
})
console.log(b);
////////////////////////////////////////////////////////////////////////
// even number
const arr = [ 1,2,3,4,5,6,7,8,9];
  const even = arr.filter((number)=>{
     return number % 2 == 0;
  })
  console.log(even);
  
 //odd nummber
 const arr = [1,2,3,4,5,6,7,8,9,];
  const odd = arr.filter((number)=>{
    return number % 2 != 0;
  })
  console.log(odd);

 //sum using map
let arr = [23,45,65];
let sum = 0;
arr.map((element)=>{
   return sum+= element;
})
console.log(sum);


//sum using reduce
let arr= [13,34,45];
let sum = arr.reduce((a,b)=>{
   return a+b;
})
console.log(sum);


/**
 * Syntax for commenting
 * @param {Array} arr (Array)
 * @param {string} checkingVal 
 * @returns {Array}
 
//const checker = (arr, checkingVal) => {

//}

let name = "Harry brook";
console.log(name.toUpperCase());
console.log(name.slice(2,4));
console.log(name.replace("Abc" ,"Xyz"));
let friend = "xyz";
console.log(name.concat(" hi this is  " , friend ))
console.log(name.includes("s"));
console.log(name.search("b"))
console.log(name.startsWith("Harry"));


// Map - object that hold key-value pairs of any data type
let store = new Map([
   ["t-shirt",20],
   ["jeans",37],
   ["hat",82],
]);
let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("hat");
console.log(shoppingCart);
store.set("shorts",48)
store.delete("jeans")
store.forEach((value,key)=> console.log(`${key} $${value}`));



const car1 = {
   model: "Mustang",
   color: "Red",
   year: 2022,

   drive : function(){
      console.log(`You drive the car ${this.model}`);
   }
}
const car2= {
   model: "corvette",
   color : "green",
   year : 2023,

   drive : function (){
      console.log(`You drive the car ${this.model}`);
   }
}
 car1.drive();
car2.drive();
*/



var arr= ["Suyash", "Kumar", "sukumar", "sujai"];

var lowercasearr = arr.map(element =>{
   return element.toLowerCase()
});
var stringToSearch="su"
var newarr = lowercasearr.filter((element) => {
   return element.includes(stringToSearch);
});
console.log(newarr);
