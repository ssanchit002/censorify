var censoreWords = ["sad", "bad", "mad"];
var customeCensoredWords = [];
function censor(inStr){
for (idx in censoredWords) {
	intStr = inStr.replace(censoreWords[idx], "****");
	}	
	for (idx in customeCensoreWords) {
		inStr=inStr.replace(customCensoreWords[idx],"***");
	}
	return inStr;
}
function addCensoreWord(word){
	customCesoreWords.push(word);
}
function getCensoreWords(){return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoreWord=addCensoreWord;
exports.getCensoreWords=getCensoreWords;