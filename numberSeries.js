//s1 2 4 6 8 12 14 16 18.......

var series = "";
var n ;
for (var i=1; i<10; i++){
    n = i*2;
    series = series + n + " ";
}console.log(series);

//s2 1 4 7 10 13 16 19 22 25 28.......

var series = "1 ";
var n = 1;
for (var i=1; i<10; i++){
    n = n+3;
    series = series + n + " ";
}console.log(series);

//s3 0 3 8 15 24 35 48 63 80.......

var series = "";
var n = 1;
for (var i=1; i<10; i++){
    n = i*i-1;
    series = series + n + " ";
}console.log(series);


//s4 1 4 3 8 5 12 7 16 9.......

var series = "";
var n = 1;
for (var i=1; i<10; i++){
    n=i;
    if(n % 2 == 0){
        n=i*2;
    }
    series = series + n + " ";
}console.log(series);


//s5 0 1 1 2 3 5 8 13 21 34 55.......
var series = "0 1 ";
var x = 0;
var y = 1;
var n;
for (var i=1; i<10; i++){
     n=x+y;
     x=y;
     y=n
     series = series + n + " ";
}console.log(series);

