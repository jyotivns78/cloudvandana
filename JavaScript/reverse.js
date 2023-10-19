function reverseWords(sentence) {
    let words = sentence.split(' ');
    let reversedWords = [];

    for (let word of words) {
        let reversedWord = reverseWord(word);
        reversedWords.push(reversedWord);
    }

    return reversedWords.join(' ');
}

function reverseWord(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
    const reversedSentence = reverseWords(sentence);
    console.log(`Reversed sentence: ${reversedSentence}`);
    rl.close();
});
