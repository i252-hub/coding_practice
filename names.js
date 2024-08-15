function userName(){
    let user = [
         { name: "John", age: 25 },
        { name: "Pete", age: 30 },
        { name: "Mary", age: 28 }
    ]

    let names = user.map((user_name) => user_name.name);
    return names;
}

console.log(userName())