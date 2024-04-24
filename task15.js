function findWordsWithSameFirstAndLastLetter() {
    const text = "oroo abfa gtg sbs ssr ccc";
    const findWords = new Set();

    const words = text.split(/\s+/);
    for (const word of words) {
        if (word.charAt(0) === word.charAt(word.length - 1)) {
            findWords.add(word);
        }
    }

    for (const word of findWords) {
        console.log(word);
    }
}

findWordsWithSameFirstAndLastLetter();
