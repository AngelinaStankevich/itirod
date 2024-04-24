function replaceWordsWithSubstring(text, wordLength, substring) {
    // Разбиваем текст на слова
    const words = text.split(/\s+/);
    let replacedText = "";

    // Проходимся по каждому слову
    for (let i = 0; i < words.length; i++) {
        // Если длина текущего слова совпадает с заданной длиной, заменяем его на подстроку
        if (words[i].length === wordLength) {
            words[i] = substring;
        }
        replacedText += words[i] + " ";
    }

    return {
        originalText: text,
        replacedText: replacedText.trim()
    };
}

const text = "Широкие тени ходят по равнине, как облака по небу, а в непонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
const wordLength = 4; // Заменяем слова длиной 6 символов
const substring = "!!!!"; // Подстрока для замены

const result = replaceWordsWithSubstring(text, wordLength, substring);
console.log("Исходный текст:", result.originalText);
console.log("Текст с замененными словами:", result.replacedText);
