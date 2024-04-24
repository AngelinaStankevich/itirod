function findSentencesWithDuplicateWords(text) {
    const sentences = text.split(/[.!?]/);
    let sentencesSet = new Set();

    for (let i = 0; i < sentences.length; i++) {
        const words1 = sentences[i].trim().split(/\s+/);

        for (let j = i + 1; j < sentences.length; j++) {
            const words2 = sentences[j].trim().split(/\s+/);

            // Проверяем каждое слово из первого предложения с каждым словом из второго предложения
            for (let word1 of words1) {
                for (let word2 of words2) {
                    if (word1.toLowerCase() === word2.toLowerCase()) {
                        sentencesSet.add(sentences[i]);
                        sentencesSet.add(sentences[j]);
                        break;
                    }
                }
            }
        }
    }

    return { count: sentencesSet.size, sentences: Array.from(sentencesSet) };
}

const text = "Пример текста с несколькими предложениями. В этом тексте есть предложение с одинаковыми словами. Предложение со словами.";
const result = findSentencesWithDuplicateWords(text);
console.log("Количество предложений с одинаковыми словами:", result.count);
console.log("Предложения с одинаковыми словами:", result.sentences);
