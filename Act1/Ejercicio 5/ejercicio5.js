var numA = 10;
var numB = 5;
var numC = 10;

if (numA === numB && numA === numC) {
   console.log("TODOS LOS NUMEROS SON IGUALES")
 }else if(numA > numB){ // se cumple si A es mayor que B
   if(numA > numC){
     console.log("El número A", numA, "es el mayor")
   } else if(numC > numA){
     console.log("El número C", numC, "es el mayor")
   } else{
     console.log("El número A y el número C son iguales", numA, numC)
   }
 } else if(numB > numA){ // se cumple si B es mayor que A
   if(numB > numC){
     console.log("El número B", numB, "es el mayor")
   } else if(numC > numB){
     console.log("El número C",numC,"es el mayor")
   }else {
     console.log("El número B y el C son iguales", numB, numC)
   }
 } else { 
   console.log("El número B y el A son iguales", numA, numB)
 }