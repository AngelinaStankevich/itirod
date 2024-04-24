function removeCharacter(text, charToRemove) {
    // Создаем регулярное выражение для удаления всех вхождений указанного символа
    const regex = new RegExp(charToRemove, 'g');

    // Заменяем все вхождения символа на пустую строку
    const newText = text.replace(regex, '');

    return newText;
}

const text = "Широкие тени ходят по равнине, как облака по небу, а в непонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
const charToRemove = "о"; // Символ, который нужно удалить

const newText = removeCharacter(text, charToRemove);
console.log(newText);
