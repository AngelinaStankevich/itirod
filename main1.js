const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function compareNumbers(firstInput, secondInput) {
    const firstNumber = parseFloat(firstInput);
    const secondNumber = parseFloat(secondInput);

    if (isNaN(firstNumber)) {
        console.log("Первый ввод – не число");
    } else if (isNaN(secondNumber)) {
        console.log("Второй ввод – не число");
    } else if (firstNumber === secondNumber) {
        console.log("Числа равны");
    } else if (firstNumber < secondNumber) {
        console.log("Первое число меньше");
    } else {
        console.log("Второе число меньше");
    }
}

rl.question('Введите первое число: ', (firstInput) => {
    rl.question('Введите второе число: ', (secondInput) => {
        compareNumbers(firstInput, secondInput);
        rl.close();
    });
});
