//here are the arrays for the words which are separated by ones and tens, and also adds a special case of '-teen'
var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
var tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

function numToWords(digit){
	if (digit != parseFloat(digit)) return 'Not a number';			//checks if the input is not a number
	if (digit > 1000000) return 'Number is too big.';				//checks if the input is greater than one million

	digit = (parseFloat(digit)).toString();							//converts the integer into a string

	var numLength = digit.length;									//finds how many numbers the digit is
	var n = digit.split('');										//converts the number into an array
	var wordAnswer = '';

	for(var i = 0; i < numLength; i++) {
		if(n[i] != 0) wordAnswer += ' ';							//adds a space in between every word

		if(n[0] == 0) {
			wordAnswer = 'zero';									//checks if the input is 'zero'
			break;
		} else if(numLength-i == 7) {
			wordAnswer += 'one million';							//goes here if the input is exactly one million
			break;
		} else if (numLength-i == 6) {
			wordAnswer += ones[Number(n[i])];						//for the hundred thousand
			wordAnswer += ' hundred';
		} else if (numLength-i == 5) {
			if(n[i] == 1) {											//checks if it's a special case of '-teen'
				wordAnswer += teen[Number(n[i+1])];	
			}
			else wordAnswer += tens[Number(n[i])];	
		} else if (numLength-i == 4) {
			if(n[i-1] != 1) wordAnswer += ones[Number(n[i])];
			wordAnswer += ' thousand';
		} else if (numLength-i == 3) {								//for the hundred
			wordAnswer += ones[Number(n[i])];
			if (n[i] != 0) wordAnswer += ' hundred';	
		} else if (numLength-i == 2) {
			if(n[i] == 1) {
				wordAnswer += teen[Number(n[i+1])];					//checks if it's a special case of '-teen'
				break;
			}
			else wordAnswer += tens[Number(n[i])];
		} else wordAnswer += ones[Number(n[i])];
	}
	
	return wordAnswer;												//prints the answer
}
