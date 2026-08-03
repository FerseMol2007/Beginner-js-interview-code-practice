function countCharacter(str){
    const counts={};
    for (let char of str){
        if(counts[char]){
            counts[char]++;
        }else{
            counts[char]=1;
        }
    }
    return counts;
}
const inputstring='wElcome home';
const characterCounts=countCharacter(inputstring)
console.log(characterCounts);