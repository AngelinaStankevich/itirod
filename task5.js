function insertSymbolAfterSubstring(text, substring, symbol) {
    // Разбиваем текст на слова
    const words = text.split(/\s+/);

    // Проходимся по каждому слову
    for (let i = 0; i < words.length; i++) {
        // Если текущее слово оканчивается заданной подстрокой, вставляем указанный символ после него
        if (words[i].endsWith(substring)) {
            words[i] += symbol;
        }
    }

    // Собираем обновленный текст из слов
    const updatedText = words.join(' ');

    return {
        originalText: text,
        updatedText: updatedText
    };
}

const text = "Широкие тени ходят по равнине, как облака по небу, а в непонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
const substring = "а"; // Подстрока, оканчивающая слова, после которых нужно вставить символ
const symbol = "*"; // Символ для вставки

const result = insertSymbolAfterSubstring(text, substring, symbol);
console.log("Исходный текст:", result.originalText);
console.log("Текст со вставленными символами:", result.updatedText);
