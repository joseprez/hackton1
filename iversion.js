var val = 1000;
var tas = 15;
var periodo= 36; 



var valFut = val * Math.pow(1+tas/100,periodo);

console.log('valor futuro', valFut);