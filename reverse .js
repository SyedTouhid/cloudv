function reverseWords(sentence) {
    var words = sentence.split(' ');

    var reversedWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });

    var reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Get input from the user
var inputSentence = prompt("Enter a sentence:"); // This will prompt the user to enter a sentence

// Check if the user entered something
if (inputSentence) {
    var reversedSentence = reverseWords(inputSentence);
    console.log("Reversed Sentence: " + reversedSentence);
} else {
    console.log("You didn't enter anything!");
}