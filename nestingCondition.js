// Condition

var PersonOne = 'jamal';
var PersonTwo = 'kamal';
 var Brother = true;

 if( 'jamal'== PersonOne && 'kamal'== PersonTwo && Brother == true ){
     console.log("We are Brother");
    
 }else{
     console.log('We are not Brother');
 }

//  2 3 5 7 

var n = 1;
if(n<10 && (2 == n || 3 == n || 5 == n || 7 == n)){
    console.log("This number",n,"smaller 10 and it's prime number")
}else if (n < 10){
    console.log("This number",n,"smaller 10 and NOT prime number")
}else {
    console.log("This number",n,"getter than 10")
}

// positive negative

var n = -5;
if(n>0){
    var result = "This is "+n+" Positive Number";
}else{
    var result = "This is "+n+" Negative Number";
}
console.log(result);


// Even Odd

var n = 3;
var result;
var reminder = n % 2;
if(0 == reminder){
    var result = "This is "+n+" Even Number"
}else{
    var result = "This is "+n+" Odd Number"
}
console.log(result);