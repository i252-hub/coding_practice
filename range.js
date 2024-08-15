function filterRange(arr, a, b){
    const array = arr.filter((x) => x>=a && x<=b);
    return array;
}

console.log(filterRange([5,3,8,1], 1, 4));