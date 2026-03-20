//  looping statement


let correctpassword ="123";
let userinput = prompt("Enter your Password");

while(userinput !==correctpassword){
    userinput = prompt("Incorrect password try again")
}

alert("access granted")


//  do while statement


let i=1
do{
    console.log(i)
    i++
}
while(i <= 7)

// do while with break and continue


let a = 1;
do{
    if (a===5) {
        a++;
        continue;
    }
    if (a===8) {
        break;
    }
    console.log(a);
    a++;
}while(a<=10);


 function changetext(abc) {
            document.getElementById("mybtn").innerText = abc;
        }


function fname(name) {
    console.log("hello ," + name + "!");
}
fname(pandi);


function footballer(name) {
    console.log("hello ," + name + "!");
}
footballer("Ronaldo");


function footballer(name = "world") {
    console.log("hello ," + name + "!");
}
footballer("Ronaldo");
footballer();


let x = myfunction(4,3);

console.log(x);

function myfunction(a,b){
    return a*b;

}

// if else statement


let password1 = false;

if (password1) {
    console.log("welcome to our website");
    
}
else{
    console.log("password is incorrect");
    
}


// if else if statement


let mark = 60;
 if (mark>=41 && mark<=60 ) {
    console.log("E-grade");
 }
 else if(mark>=61 && mark<=80){
    console.log("c-grade");
 }
 else if(mark>=81 && mark<=90){
    console.log("c-grade");
 }
 else if(mark>=91 && mark<=100){
    console.log("c-grade");
 }
 else{
    console.log("arrear");
 }



//  switch statement

let trafficlight = "over speed";

switch (trafficlight){
    case "red" : console.log("stop");
    break;
    case "yellow" : console.log("get ready");
    break;
    case "green" : console.log("go");
    break;
    default : console.log("pay fine");
    break;
}



let day = "monday";

switch(day){
    case "monday" : 
    case "wednesday" : 
    case "friday" : console.log("weekday");
    break;
    case "saturday" : 
    case "sunday" : console.log("weekend");
    break;
    default : console.log("it is not a day");
    break;
}


// nested if statement

let age = 25;
let height = 150;
let weight = 45;

if (age>=18){
    if (height >=150){
        if(weight >=45){
            console.log("you are selected");
        }
        else{
        console.log("weight is not matched")
        }
    }
    else{
        console.log("height is not matched");
    }
}
else{
    console.log("age is not valid");
}



// ternary operator

// syntax

/*
    condition ? "statement1" : "statement2" ;
*/

let password = true;

password? console.log("welcome to our website"): console.log("password is incorrect");


// looping statement 

console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);


// for loop

/*
syntax

  for(initialization ; condition ; counter){
  }

*/


for( let i=1; i<=10; i++ ){
    console.log(i);
}


for( let i=1; i<=10; i++ ){
   
    if(i%2 !==0)console.log(i);
}


//  while loop 

/*
initialization 
while(condition){
statement;
counter;
}

*/


let val =10;

while(val>=1){
    console.log(val);
    val--;
}


let num = 1234;
let sum = 0;


while( num > 0){
    let last =num%10;
    num = parseInt (num/10);
    sum = sum + last;
}
console.log(sum);

















