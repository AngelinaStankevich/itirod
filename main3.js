function fibonacci(n) {
    if (n <= 0) {
        throw "Некорректные данные: число должно быть положительным.";
    }
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }

    let a = 0, b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите номер числа Фибоначчи: ', (input) => {
    try {
        const n = parseInt(input);
        if (isNaN(n) || n <= 0) {
            throw "Некорректные данные: введите положительное целое число.";
        }

        const result = fibonacci(n);
        console.log(`Число Фибоначчи под номером ${n}: ${result}`);
    } catch (error) {
        console.log("Ошибка: " + error);
    } finally {
        rl.close();
    }
});
