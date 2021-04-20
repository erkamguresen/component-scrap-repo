function stringTokenizer(textToTokenize){
    let returnArray = [];

    //check empty text or null
    if(textToTokenize === null||textToTokenize==='')
        return returnArray;

    //token to lines
    returnArray.push(getLineTokens(textToTokenize));

    //token to words
    for (let i = 0; i < returnArray.length; i++) {
        //get from front (shift) add to back (push)
        // const element = returnArray.shift();
        returnArray.push(getWordTokens(returnArray.shift()));        
    }

    return returnArray;
}

function getLineTokens(textToTokenize){
    let returnArray = [];
    //get from front (shift) add to back (push)

    for(let i = 0; i < textToTokenize.length; i++){
        let char = textToTokenize[i];
        if(char !== '\n')
            returnArray.push(char);

    }

    return returnArray;
}

function getWordTokens(textLineToTokenize){
    //get from front (shift) add to back (push)

}

let stringVar = 'The \nend !!!';

console.log('The \nend !!!');
console.log(stringVar.charCodeAt(4));

for (let i = 0; i < stringVar.length; i++) {
    const element = stringVar[i];
    console.log(i, element, ' ', element.charCodeAt());
    
}


// for (let i=0; i < 200; i++){
//     let s = String.fromCharCode(i);
//     console.log(i, s);
//   }