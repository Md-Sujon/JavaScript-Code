var list = [
    "c",
    "b",
    "a",
    "d",
    "e",
    "g",
    "f" 
]

list.sort();
console.log(list);

var list1 = [2,35,6,18,87,91,5,78,23,56,84,3]
// console.log(list1.sort());

// var a = 10; b = 20;
// [a,b] =[b,a]
// console.log(a,b);

var length = list1.length-1;

for (var i=0; i < length; i++) {
    for (var j=0; j < length; j++) {
        if(list1[j] > list1[j+1]){
            [list1[j], list1[j+1]] = [list1[j+1], list1[j]]
        }
    }
}console.log(list1);


