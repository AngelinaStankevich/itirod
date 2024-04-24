function findMostFrequentCharacters(text) {
    // Удаляем пробелы из текста и приводим все символы к нижнему регистру
    const cleanedText = text.replace(/\s/g, '').toLowerCase();

    // Создаем объект для подсчета частоты встречаемости символов
    const charCount = {};

    // Заполняем объект charCount
    for (let char of cleanedText) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Находим наиболее часто встречающиеся символы
    let maxCount = 0;
    let mostFrequentChars = [];

    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            mostFrequentChars = [char];
        } else if (charCount[char] === maxCount) {
            mostFrequentChars.push(char);
        }
    }

    return mostFrequentChars;
}

const text = "Сверкающая река встретила мягкой прохладой. С её просторов дул свежий ветер. Вдаль уходило окаймлённое бархатной зеленью берегов дрожащее живое серебро воды.";
console.log("Исходный текст:", text);

// Находим и выводим наиболее часто встречающиеся символы
const mostFrequentChars = findMostFrequentCharacters(text);
console.log("Символы, встречающиеся наиболее часто:", mostFrequentChars);
