function numberDelimited(digit, delimiter, jumps) {
	if(digit > 1000000) return 'Number is too big';					//checks if the number is greater than one million

	digit = (digit.toString()).split('');							//transforms the digit into an array

	var answer = '';

	for(var i = 0; i <= digit.length-1; i++) {
		if(i == (digit.length - jumps)) answer += delimiter;		//check if the index is where the delimiter should be located

		answer += digit[i];											//combines the digit from the array to the answer
	}

	return answer;													//prints the final answer
}