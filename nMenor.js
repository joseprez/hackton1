var a = 12;
var b = 20;
var c = [15,2,3,4,5,6,7,8,9];

console.log('lista' , c);

/*
const nmenor = ()=>{

}*/

var menor= Math.min.apply(null,c);
console.log("menor", menor);