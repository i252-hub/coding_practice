
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };




    let users = [ john, pete, mary ];

let usersMapped = users.map((item) => {
    return {
        fullName: item.name + ' ' + item.surname
    }
});
  

console.log(usersMapped);