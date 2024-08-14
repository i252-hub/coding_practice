const sumOfTripledEvens = (array) => {
    
    const result = array.filter(item => item % 2 == 0).map(item => item* 3).reduce(
        (accumulator, current) => accumulator + current, 0)
     
        return result;
}

console.log(sumOfTripledEvens([1,2,3,4,5]));