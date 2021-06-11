// Condition

// var PersonOne = 'jamal';
// var PersonTwo = 'kamal';
//  var Brother = true;

//  if( 'jamal'== PersonOne && 'kamal'== PersonTwo && Brother == true ){
//      console.log("We are Brother");
    
//  }else{
//      console.log('We are not Brother');
//  }

//  2 3 5 7 

// var n = 1;
// if(n<10 && (2 == n || 3 == n || 5 == n || 7 == n)){
//     console.log("This number",n,"smaller 10 and it's prime number")
// }else if (n < 10){
//     console.log("This number",n,"smaller 10 and NOT prime number")
// }else {
//     console.log("This number",n,"getter than 10")
// }

// positive negative

// var n = -5;
// if(n>0){
//     var result = "This is "+n+" Positive Number";
// }else{
//     var result = "This is "+n+" Negative Number";
// }
// console.log(result);


// Even Odd

// var n = 0;
// var result;
// var reminder = n % 2;

// if(0 == n){result = "This is "+n+" neutral Number"}

// else if(0 == reminder){result = "This is "+n+" Even Number"}

// else{result = "This is "+n+" Odd Number"}

// console.log(result);

// movie watch

// var movieRating = "pg";
// var age = 18;
// if("pg"==movieRating && age>=15){
//     console.log("You can Watch this movie");
// }else if("r"== movieRating && age>=18){
//     console.log("You can Watch this movie");
// }else if("g"== movieRating){
//     console.log("You can Watch this movie");
// }else{
//     console.log("You can not Watch this movie");
// }

// if(("pg"==movieRating && age>=15) || ("r"== movieRating && age>=18) || ("g"== movieRating)){
//     console.log("You can Watch this movie");
// }else{
//     console.log("You can not Watch this movie");
// }

var yourAge = 20;
var result;

if(yourAge < 0 || yourAge > 200){
    result ="vampire"
}
else if(yourAge <= 1){
    result ="baby"
}else if (yourAge <=3){
    result ="toddle"
}else if (yourAge <=12){
    result ="kid"
}else if(yourAge < 18){
    result ="teenger"
   }else if (yourAge >= 18){
       result ="adult"
   }

console.log(result);