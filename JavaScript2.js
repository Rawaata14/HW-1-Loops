// let i = 1;
// let sum = 0;
// while(i <= 100)
// {
//     sum = sum + i;
//     i++;
// }
// console.log("The sum is: ",sum);

// //Task#2
// let number;
// do {
//     number = prompt("Enter a number");
// } while (isNaN(number) || number <= 0);
// console.log("The number is: ", number);

// //Task#3
// let num = 7;
// for (let i = 1; i <= 10; i++) {
//     console.log(num + ' x ' + i + ' = ' + num * i);
// }

// //Task#4
// const secret = 7;
// let guess = prompt("Enter your guess between 1 to 10: ");;
// do {
//     alert("Not correct! Try Agian");
//     guess = prompt("Enter your guess between 1 to 10: ");
// } while (guess != 7);
// alert("Bingo!! The number is " + secret);

//Task#5
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) continue;
    console.log(i);
}