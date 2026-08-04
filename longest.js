function findLongestWord(sentence){
    const words=sentence.split(' ');
    let longestWord='';
    for (const word of words) {
        if(word.length> longestWord.length){
            longestWord=word;
        }
    }
    return longestWord;
}
const sentence="I live in an apartment";
console.log(findLongestWord(sentence));