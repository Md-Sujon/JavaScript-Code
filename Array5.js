var days = [
    "sun",//0  =-7
    "mon",//1  =-6
    "tue",//2  =-5
    
]

var day = [
    "wed",//3   =-4
    "thu",//4   =-3
    
]

var da1 = [
    "fri",//5   =-2
    "sat" //6   =-1
]

var da = day.concat(days,da1)
var d = [].concat(da,days,da1)
console.log(da);
console.log(d);