function stringTokenizer(textToTokenize) {
  let returnArray = [];

  //check empty text or null
  if (textToTokenize === null || textToTokenize === "") return returnArray;

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

function getLineTokens(textToTokenize) {
  let returnArray = [];
  let line = "";
  //get from front (shift) add to back (push)

  let length = textToTokenize.length;

  for (let i = 0; i < textToTokenize.length; i++) {
    let char = textToTokenize[i];

    if (i === textToTokenize.length - 1) {
      line += char;
      returnArray.push(line);
      break;
    }

    if (char !== "\n") {
      line += char;

      continue;
    }

    if (char === "\n") {
      returnArray.push(line);
      line = "";
      continue;
    }
  }

  return returnArray;
}

// delimiters from java \t\n\r\f
function getWordTokens(textLineToTokenize) {
  //get from front (shift) add to back (push)
  let returnArray = [];
  let word = "";
  //get from front (shift) add to back (push)

  let length = textLineToTokenize.length;

  for (let i = 0; i < textLineToTokenize.length; i++) {
    let char = textLineToTokenize[i];

    if (i === textLineToTokenize.length - 1) {
      word += char;
      returnArray.push(word);
      break;
    }

    if (char !== "\n") {
      word += char;

      continue;
    }

    //should not contain \n
    if (
      char === "\n" ||
      char === "\t" ||
      char === " " ||
      char === "\r" ||
      char === "\f"
    ) {
      if (word !== " ") returnArray.push(word);

      word = "";
      continue;
    }
  }

  return returnArray;
}

function areArraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    // let text1 = a[i];
    // let text2 = b[i];
    // let truth = a[i].localeCompare(b[i]);
    // let truht2 = "Lorem ipsum dolor, ".localeCompare("Lorem ipsum dolor, ");
    // let truth3 = a[i] === b[i];
    if (a[i] !== b[i]) return false;
  }
  return true;
}
// let stringVar = "The \nend !!!";

// console.log("The \nend !!!");
// console.log(stringVar.charCodeAt(4));
// console.log(stringVar.length);

// for (let i = 0; i < stringVar.length; i++) {
//   const element = stringVar[i];
//   console.log(i, element, " ", element.charCodeAt());
// }

// for (let i=0; i < 200; i++){
//     let s = String.fromCharCode(i);
//     console.log(i, s);
//   }

let text = `Lorem ipsum dolor, 
sit amet consectetur adipisicing elit. 
Libero voluptatibus neque repellat rerum perspiciatis sunt tempore, 
iste soluta quae temporibus aspernatur accusantium perferendis ipsa accusamus 
voluptatem adipisci commodi assumenda ab dolorem cumque vitae, quia reprehenderit repudiandae. 
Animi doloribus quisquam recusandae!`;

let textLines = [
  "Lorem ipsum dolor, ",
  "sit amet consectetur adipisicing elit. ",
  "Libero voluptatibus neque repellat rerum perspiciatis sunt tempore, ",
  "iste soluta quae temporibus aspernatur accusantium perferendis ipsa accusamus ",
  "voluptatem adipisci commodi assumenda ab dolorem cumque vitae, quia reprehenderit repudiandae. ",
  "Animi doloribus quisquam recusandae!",
];

let text2 = `Lorem ipsum dolor, 
sit amet consectetur adipisicing elit.[] 
Libero voluptatibus neque repellat rerum perspiciatis sunt tempore, {} 
iste soluta quae temporibus aspernatur accusantium perferendis ipsa accusamus <>
voluptatem adipisci commodi assumenda ab dolorem cumque vitae, quia reprehenderit repudiandae. /?;:'\|
Animi doloribus quisquam recusandae!`;

let textLines2 = [
  "Lorem ipsum dolor, ",
  "sit amet consectetur adipisicing elit.[] ",
  "Libero voluptatibus neque repellat rerum perspiciatis sunt tempore, {} ",
  "iste soluta quae temporibus aspernatur accusantium perferendis ipsa accusamus <>",
  "voluptatem adipisci commodi assumenda ab dolorem cumque vitae, quia reprehenderit repudiandae. /?;:'|",
  "Animi doloribus quisquam recusandae!",
];

(function tests() {
  let lineTokens = getLineTokens(text);
  let lineTokens2 = getLineTokens(text2);

  // console.log(textLines);
  let isTestPassed = areArraysEqual(textLines, lineTokens);
  console.assert(isTestPassed, "Line Tests Filed");

  isTestPassed = areArraysEqual(textLines2, lineTokens2);
  console.assert(isTestPassed, "Line Tests Filed");

  console.log("The End of The Tests");
})();
