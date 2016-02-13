var wordLibrary = {
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
    'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
    'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20,
    'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90
};

function wordsToNum(){
	var word = document.getElementById("input").value;

	var wordArray = word.split(' ');
	var value = 0;
	var digit = 0;

	if(wordArray.indexOf('million') != -1) {
		if ((wordArray.indexOf('million') == wordArray.length - 1) && (wordArray[0] == 'one')) value = 1000000;
		else return 'Number is too big.';
	}
	else {
		var thousandLocator = wordArray.indexOf('thousand');

		if (thousandLocator != -1) {
			for(var i = thousandLocator - 1; i >= 0; i--) {	
				if(wordArray[i] == 'hundred') {
					digit = wordLibrary[wordArray[i-1]] * 100;
					i--;
				} else digit = wordLibrary[wordArray[i]];
			
				value += digit;
			}

			value *= 1000;
			thousandLocator++;
		} else thousandLocator = 0;

		for(var i = wordArray.length - 1; i >= thousandLocator; i--) {	
			if(wordArray[i] == 'hundred') {
				digit = wordLibrary[wordArray[i-1]] * 100;
				i--;
			} else digit = wordLibrary[wordArray[i]];
		
			value += digit;
		}
	}
	
	return value;
}

function showResult(a) {
	alert(a);
}
