var ones = ['','one','two','three','four','five','six','seven','eight','nine'];
var tens = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

function numToWords(){
	var digit = document.getElementById("input").value;

	if (digit != parseFloat(digit)) return 'Not a number';
	if (digit > 1000000) return 'Number is too big.';

	digit = parseFloat(digit);
	digit = digit.toString();

	var numLength = digit.length;
	var n = digit.split('');
	var wordAnswer = '';

	if(n[0] == 0) return 'zero';

	for(var i = 0; i < numLength; i++) {
		if(n[i] != 0) wordAnswer += ' ';

		if(numLength-i == 7) {
			wordAnswer += 'one million';
			break;
		} else if (numLength-i == 6) {
			wordAnswer += ones[Number(n[i])];
			wordAnswer += ' hundred';
		} else if (numLength-i == 5) {
			if(n[i] == 1) {
				wordAnswer += teen[Number(n[i+1])];
			}
			else wordAnswer += tens[Number(n[i])];
		} else if (numLength-i == 4) {
			if(n[i-1] != 1) wordAnswer += ones[Number(n[i])];
			wordAnswer += ' thousand';
		} else if (numLength-i == 3) {
			wordAnswer += ones[Number(n[i])];
			if (n[i] != 0) wordAnswer += ' hundred';
		} else if (numLength-i == 2) {
			if(n[i] == 1) {
				wordAnswer += teen[Number(n[i+1])];
				break;
			}
			else wordAnswer += tens[Number(n[i])];
		} else wordAnswer += ones[Number(n[i])];
	}
	return wordAnswer;
}

function showResult(a) {
	alert(a);
}
