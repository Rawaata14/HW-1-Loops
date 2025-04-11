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

//Task#4
// const secret = 7;
// let flag = true;
// let guess;
// for (let i = 0; flag; i++) {
//     guess = Number(prompt('Enter your guess between 1 and 10: '));
//     if (guess == secret) {
//         alert('Bingo!! You have guessed the number :)'); break;
//     }
//     else
//         alert("Try Again!!");
// }
// //Task#5
// for (let i = 1; i <= 30; i++) {
//     if (i % 3 == 0) continue;
//     console.log(i);
// }

// //Task#6
// let i = 3;
// while (i) {
//     alert(i--);
// }
// //הערך האחרון הוא 1 כי 0 מחזיר FALSE

// //Task#7
// // let i =0;
// // while(++i < 5)
// //     console.log(i);
// //This loop shows values from 1 to 4 because it add 1 to i before comparing it with 5
// let i = 0;
// while (i++ < 5)
//     console.log(i);
// //This loop shows values from 0 to 5 because it add 1 to i after comparing it with 5 

// //Task#8
// // for(let i = 0; i<5; i++)
// //     console.log(i);
// //This loop well shows values from 0 to 4
// for (let i = 0; i < 5; ++i)
//     console.log(i);
// //This loop well shows values from 0 to 4
// //the two loops do the same thing

// //Task#9
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 1) continue;
//     console.log(i);
// }

//Task#10
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++
}
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }