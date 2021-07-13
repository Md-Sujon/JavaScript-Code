var da = [
    "sun",
    NaN,
    "tue",
    undefined,
    "thu",
    false,
    "sat",
    ,
    "sujon"    
]
console.log(da);

var newList = [];


for (var i = 0; i < da.length; i++) {
    if (da[i]) {
    newList.push(da[i]);
    }
}console.log(newList);