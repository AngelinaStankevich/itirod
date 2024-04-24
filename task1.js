const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateTelegramReceipt(wordCost, message) {
    const words = message.trim().split(/\s+/);
    const totalCost = words.length * wordCost;
    
    console.log("Квитанция об оплате за телеграмму");
    console.log("-------------------------------");
    console.log("Текст сообщения: ", message);
    console.log("-------------------------------");
    console.log("Количество слов: ", words.length);
    console.log("Стоимость одного слова: ", wordCost);
    console.log("-------------------------------");
    console.log("Общая стоимость: ", totalCost);

    rl.close();
}

rl.question('Введите стоимость одного слова: ', (wordCost) => {
    rl.question('Введите текст сообщения: ', (message) => {
        generateTelegramReceipt(parseFloat(wordCost), message);
    });
});
