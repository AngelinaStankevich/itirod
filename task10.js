function findMinMaxWords(text) {
    // Разбиваем текст на массив слов, используя пробел в качестве разделителя
    const words = text.split(/\s+/);

    // Инициализируем переменные для хранения минимальной и максимальной длины слов
    let minLength = Infinity;
    let maxLength = 0;

    // Находим минимальную и максимальную длину слов
    for (let word of words) {
        const length = word.length;
        if (length < minLength) {
            minLength = length;
        }
        if (length > maxLength) {
            maxLength = length;
        }
    }

    // Инициализируем массивы для хранения слов минимальной и максимальной длины
    const minWords = [];
    const maxWords = [];

    // Находим все слова минимальной и максимальной длины
    for (let word of words) {
        if (word.length === minLength && !minWords.includes(word)) {
            minWords.push(word);
        }
        if (word.length === maxLength && !maxWords.includes(word)) {
            maxWords.push(word);
        }
    }

    // Возвращаем объект с найденными словами
    return { minWords, maxWords };
}

const text = "Широкие тени ходят по равнине, как облака по небу, а в непонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
console.log("Исходный текст:", text);

const { minWords, maxWords } = findMinMaxWords(text);
console.log("Слова минимальной длины:", minWords);
console.log("Слова максимальной длины:", maxWords);
