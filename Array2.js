var males = ["Sujon","Rakib","Sakib","Robin","Sokina"];
var females = ["Sarmin"];

var lastPerson =males.pop();
females.push(lastPerson);

var personRemoved = males[2];
females.push(personRemoved);

console.log(males,females);

console.log(males.length,females.length);
