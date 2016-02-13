var wordLibrary = {													//each word has a key value pair of its number equivalents
    'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10,
    'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15,
    'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20,
    'thirty': 30, 'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90
};

function wordsToNum(word){
	var wordArray = word.split(' ');								//separates the input into an array
	var value = 0;
	var digit = 0;

	if(wordArray.indexOf('million') != -1) {						//checks if there is a 'million' in the input
		if ((wordArray.indexOf('million') == wordArray.length - 1) && (wordArray[0] == 'one')) value = 1000000;	//checks if the input is exactly one million
		else return 'Number is too big.';
	}
	else {
		var thousandLocator = wordArray.indexOf('thousand');		//checks if there is a 'thousand' in the input

		if (thousandLocator != -1) {								//enters here if 'thousand' is found
			for(var i = thousandLocator - 1; i >= 0; i--) {			//loops from the 'thousand' to the leftmost
				if(wordArray[i] == 'hundred') {	
					digit = wordLibrary[wordArray[i-1]] * 100;
					i--;
				} else digit = wordLibrary[wordArray[i]];
			
				value += digit;
			}

			value *= 1000;											//makes the value a thousand
			thousandLocator++;										//adds 1 to make the 'thousand' index not counted
		} else thousandLocator = 0;	

		for(var i = wordArray.length - 1; i >= thousandLocator; i--) {	//loops from the rightmost to the 'thousand'
			if(wordArray[i] == 'hundred') {
				digit = wordLibrary[wordArray[i-1]] * 100;
				i--;
			} else digit = wordLibrary[wordArray[i]];
		
			value += digit;
		}
	}
	
	return value;													//prints the number value of the word
}
