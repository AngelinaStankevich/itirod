function countVowelsAndConsonants(text) {
    // Приводим текст к нижнему регистру для удобства подсчета
    text = text.toLowerCase();
  
    // Определяем список гласных букв
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

    // Подсчитываем количество гласных и согласных букв в тексте
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of text) {
        // Если символ - буква, проверяем, является ли он гласной или согласной
        if (/[а-яё]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    // Возвращаем объект с количеством гласных и согласных букв
    return { vowels: vowelCount, consonants: consonantCount };
}

const text = "Широкие тени ходят по равнине, как облака по небу, а в непонятной дали высятся, громоздятся друг на друга туманные, причудливые образы.";
console.log("Исходный текст:", text);

const counts = countVowelsAndConsonants(text);
console.log("Количество гласных букв:", counts.vowels);
console.log("Количество согласных букв:", counts.consonants);

// Сравниваем количество гласных и согласных букв
if (counts.vowels > counts.consonants) {
    console.log("В тексте больше гласных букв.");
} else if (counts.vowels < counts.consonants) {
    console.log("В тексте больше согласных букв.");
} else {
    console.log("В тексте одинаковое количество гласных и согласных букв.");
}
