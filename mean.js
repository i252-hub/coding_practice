function getAverageAge(users){
const user = users.reduce((a, b) => 
     (a + b.age),0)
return user/users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

console.log(getAverageAge(users));