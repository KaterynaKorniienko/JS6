let numbers = [10, 20, 30, 40, 50];
let total = numbers.reduce((acc, elem, idx, arr) => {
    // console.log(acc, idx);
    // console.log(acc, elem);
    // console.log(idx);
    // console.log(arr);
    console.log(acc);


    // console.log(`${idx}: ${acc}`);
    return acc + elem;
}, 0);

console.log("total", total);