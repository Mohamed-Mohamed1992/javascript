// function add(...numbers){
// return numbers.reduce((sum, n) => sum + n, 0)
// };

// console.log(add(1, 2, 3))
// console.log(add(5, 10, 15, 20))

function add(numb1, numb2, ...numbers){
    console.log(numb1);
    console.log(numb2);
    console.log(numbers);
};

add(1, 2, 3, 9, 7, 4, 50)

