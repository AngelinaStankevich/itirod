function findWordsStartingAndEndingWithVowel(text) {
    // Разбиваем текст на слова, используя пробел в качестве разделителя
    const words = text.split(/\s+/);

    // Создаем регулярное выражение для поиска гласных букв в начале и в конце слова
    const regex = /^[аеёиоуыэюяaeiouy]+.*[аеёиоуыэюяaeiouy]+$/i;

    // Инициализируем массив для хранения слов, удовлетворяющих условию
    const resultWords = [];

    // Проверяем каждое слово на соответствие регулярному выражению и добавляем в массив, если удовлетворяет
    for (let word of words) {
        if (regex.test(word)) {
            resultWords.push(word);
        }
    }

    // Возвращаем массив найденных слов
    return resultWords;
}

const text = "Сверкающая река встретила мягкой прохладой. С её просторов дул свежий ветер. Вдаль уходило окаймлённое бархатной зеленью берегов дрожащее живое серебро воды.";
console.log("Исходный текст:", text);

// Находим и выводим слова, начинающиеся и заканчивающиеся гласной буквой
const resultWords = findWordsStartingAndEndingWithVowel(text);
console.log("Слова, начинающиеся и заканчивающиеся гласной буквой:", resultWords);