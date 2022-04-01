function main(){

    var myNoun = " dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = " quickly";

    wordBlanks = "Small" + myNoun + " was afraid of " + myAdjective + myNoun + " and he " + myVerb + myAdverb;

    return wordBlanks;
}

console.log(main());
module.exports = main;