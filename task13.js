function findWordChain(words) {
    let wordChain = [];
    let usedWords = new Set();

    function findChain(currentChain) {
        if (currentChain.length > wordChain.length) {
            wordChain = currentChain.slice();
        }

        let lastWord = currentChain[currentChain.length - 1];
        let lastLetter = lastWord.charAt(lastWord.length - 1);

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (!usedWords.has(word) && word.charAt(0) === lastLetter) {
                usedWords.add(word);
                findChain(currentChain.concat(word));
                usedWords.delete(word);
            }
        }
    }

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        usedWords.add(word);
        findChain([word]);
        usedWords.delete(word);
    }

    return wordChain;
}

let words = ["hello", "orange", "elephant", "apple", "eagle", "cat", "tiger", "rat"];
let result = findWordChain(words);
console.log(result);
