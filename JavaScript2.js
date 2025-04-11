// let i = 1;
// let sum = 0;
// while(i <= 100)
// {
//     sum = sum + i;
//     i++;
// }
// console.log("The sum is: ",sum);

//Task#2
let number;
do {
    number = prompt("Enter a number");
} while (isNaN(number) || number <= 0);
console.log("The number is: ", number);