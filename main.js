let result = (0.1 + 0.2).toFixed(1); // result буде '0.3'
console.log(parseFloat(result)); // Виведе 0.3



let str = "1";
let num = 2;
let sum = parseInt(str) + num; // sum буде 3
console.log(sum); // Виведе 3



let flashDriveSizeGB = 4; // наприклад, 4 Гб
let fileSizeMB = 820;
let flashDriveSizeMB = flashDriveSizeGB * 1024; // Перетворення Гб в Мб
let numberOfFiles = Math.floor(flashDriveSizeMB / fileSizeMB);
console.log(numberOfFiles); // Виведе кількість файлів



//Normal level//


let money = 100; // наприклад, 100 гривень
let chocolatePrice = 25;
let chocolates = Math.floor(money / chocolatePrice);
let change = money % chocolatePrice;
console.log(`Кількість шоколадок: ${chocolates}, Здача: ${change}`);



let number = 123; // наприклад, 123
let reversed = (number % 10) * 100 + (Math.floor(number / 10) % 10) * 10 + Math.floor(number / 100);
console.log(reversed); // Виведе 321



//Max level//


let deposit = 1000; // наприклад, 1000 гривень
let interestRate = 5 / 100;
let months = 2;
let interest = (deposit * interestRate / 12) * months;
console.log(`Нараховані відсотки: ${interest}`); // Виведе суму нарахованих відсотків



2 && 0 && 3 //поверне 0
2 || 0 || 3 //поверне 2