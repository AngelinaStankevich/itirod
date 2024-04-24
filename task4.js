function insertSubstringAfterChar(text, char, substring) {
    const index = text.indexOf(char);

    if (index !== -1) {
        const firstPart = text.substring(0, index + 1);
        const secondPart = text.substring(index + 1);
        return firstPart + substring + secondPart;
    } else {
        return text;
    }
}

const text = "Широкие тени ходят по равнине, как облака по небу, а в непонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
const char = "т"; // Символ, после которого нужно вставить подстроку
const substring = "****"; // Подстрока для вставки

const newText = insertSubstringAfterChar(text, char, substring);
console.log(newText);
