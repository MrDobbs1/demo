function countVowelsAndConsonants(inputString) {
let vowelsCount = 0;
let consonantsCount = 0;
const vowels = "aeiou";


for (const letter of inputString) {
    if (vowels.includes(letter.toLowerCase())) {
        vowelsCount++;
    } else if (letter.toLowerCase() !== letter.toUpperCase()) {
        consonantsCount++;
    }
}
return { vowels: vowelsCount, consanants: consonantsCount};
}

console.log(countVowelsAndConsonants("react"));



function findLongestWord(sentence) {
    let longestWord = "";
    let currentWord = "";

    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length) {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }   
            currentWord = "";
        } else {
            currentWord += sentence[i];
        }
    }
    return longestWord;
}


console.log(findLongestWord("my head is roundddddddddddddd and i like basketballllll"));