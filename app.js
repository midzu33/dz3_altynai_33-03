var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br']
var count = {};

for (let tag of tags) {
    if (count[tag] === undefined) {
        count[tag] = 1;
    } else {
        count[tag]++;
    }
}
console.log(count);



var person = [
    {
        name: 'john',
        lastname: 'Black',
        age: 23,
    }
]
for(var i = 0; i < person.length; i++){
    console.log(person[i]['name'])
    console.log(person[i]['lastname'])
    console.log(person[i]['age']);
}




var doCalc = function (num1, num2){
    console.log(num1 / num2)
}
doCalc(100, 2.3)
