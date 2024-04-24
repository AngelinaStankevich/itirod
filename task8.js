function removeWordsStartingWithConsonant(text, length) {
    // Разделяем текст на массив слов
    const words = text.split(/\s+/);

    // Фильтруем массив слов, оставляя только те, которые не начинаются с согласной буквы и не имеют заданную длину
    const filteredWords = words.filter(word => {
        // Проверяем, начинается ли слово с согласной буквы (русская версия)
        const firstLetter = word.charAt(0).toLowerCase();
        if ('бвгджзйклмнпрстфхцчшщ'.includes(firstLetter)) {
            // Если слово начинается с согласной буквы, проверяем его длину
            return word.length !== length;
        }
        // Если слово начинается с гласной буквы, оставляем его
        return true;
    });

    // Собираем отфильтрованные слова обратно в текст
    const newText = filteredWords.join(' ');

    return newText;
}

const text = "Широкие тени ходят по равнине, как облака по небу, а в непонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
const length = 4; // Длина слова
const newText = removeWordsStartingWithConsonant(text, length);
console.log("Исходный текст:", text);
console.log("Текст с удаленными словами:", newText);
