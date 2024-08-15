function copy(arr){
   return arr.slice().sort();
  
}

let arr = ["HTML", "JavaScript", "CSS"];

let c = copy(arr);

console.log(c,arr)
