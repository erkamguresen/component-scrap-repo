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
        const element = returnArray[i];
        
    }

    return returnArray;
}

function getLineTokens(textToTokenize){
    //get from front (shift) add to back (push)

}