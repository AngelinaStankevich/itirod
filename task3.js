function replaceLettersWithAlphabetNumbers(text) {
    const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let replacedText = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        const index = russianAlphabet.indexOf(char) + 1;

        // Если символ не является буквой русского алфавита, оставляем его без изменений
        if (index === 0) {
            replacedText += text[i];
        } else {
            replacedText += index + ' ';
        }
    }

    return {
        originalText: text,
        replacedText: replacedText.trim()
    };
}

const text = "Широкие тени ходят по равнине, как облака по небу, а в непонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
const result = replaceLettersWithAlphabetNumbers(text);
console.log("Исходный текст:", result.originalText);
console.log("Текст с замененными буквами:", result.replacedText);
