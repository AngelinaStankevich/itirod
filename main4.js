const readline = require('readline');
const { format } = require('date-fns');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите номер месяца (1..12): ', (month) => {
    rl.question('Введите число в этом месяце (1..31): ', (day) => {
        try {
            month = parseInt(month);
            day = parseInt(day);
            if (isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
                throw "Некорректные данные: введите число месяца от 1 до 12 и число от 1 до 31.";
            }

            const date = new Date(Date.UTC(2015, month - 1, day)); // Создаем дату в UTC
            const dayName = format(date, 'EEEE'); // Форматируем день недели

            console.log(`День недели: ${dayName}`);
        } catch (error) {
            console.log("Ошибка: " + error);
        } finally {
            rl.close();
        }
    });
});
