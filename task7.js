function removeNonAlphabetic(text) {
    // Создаем регулярное выражение для поиска всех не-буквенных символов, кроме пробелов
    const regex = /[^a-zA-Zа-яА-Я\s]/g;

    // Удаляем все не-буквенные символы из текста
    const newText = text.replace(regex, '');

    return newText;
}

const text = "Широк1ие тени ход3ят по р5авнин$е,8 как облака по небу,90 а в н75@епонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
const newText = removeNonAlphabetic(text);
console.log("Исходный текст:", text);
console.log("Текст с удаленными символами:", newText);
