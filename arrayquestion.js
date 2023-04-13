var arr= ["Suyash", "Kumar", "sukumar", "sujai"];

var lowercasearr = arr.map(element =>{
   return element.toLowerCase()
});
var stringToSearch="su"
var newarr = lowercasearr.filter((element) => {
   return element.includes(stringToSearch);
});
console.log(newarr);