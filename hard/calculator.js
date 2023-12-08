/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
function valid(char){
	if(char >= "0" && char <= "9"){
		return true;
	}
	else if(char == "+" ||char == "."|| char == "-" || char == "*" || char == "/" || char == "(" || char == ")"){
		return true;
	}
	else{
		return false;
	}
}
class Calculator {
    constructor(){
		this.result = 0;
	}
	add(x){
		this.result += x;
	}
	substract(x){
		this.result -= x;
	}
	multiply(x){
		this.result *= x;
	}
	divide(x){
		this.result /= x;
	}
	clear(){
		this.result = 0;
	}
	getResult(){
		return this.result;
	}
	calculate(str){
		// throw -1 if it is not correct if invalid characters exist 
		let new_str = "";
		for(let i = 0; i<str.length; i++){
			if(str[i] == ' '){
				continue;
			}
			else{
				if(valid(str[i]) == true){
					new_str += str[i];
				}
				else{
					throw "error";
				}
			}
		}
		// Question reduces to evaluate a string and report its answer (it has parenthesis)
		let ans = function(new_str){
			let sign = 1, sum = 0;
			
			const stack = []; 
			for (let i = 0; i < s.length; i += 1) {
				if (s[i] >= '0' && s[i] <= '9') {
					let num = 0
					// num can be multiple digits, iterate to build full num.
					while (s[i] >= '0' && s[i] <= '9') {
						num = (num * 10) + (s[i] - '0');
						i += 1;
					}
					// add your completed sum.
					sum += (num * sign);
					// while loop from earlier causes our index to move forward once, bring it back
					i -= 1;
				} else if (s[i] === '+') {
					sign = 1;
				} else if (s[i] === '-') {
					sign = -1;
				} else if (s[i] === '(') {
					// open parens signifies that we should calculate the inside of the parens first and store the outer sum and sign in stack. 
					// we can later retrieve the values in our stack once we find a closing bracket.
					stack.push(sum);
					stack.push(sign);
					sum = 0
					// we used our sign, reset it to default.
					sign = 1;
				} else if (s[i] === ')') {
					// closing bracket assumes we've calculated the sum inside the parens. 
					// Earlier, we pushed the sum first into our stack. First pop will be the sign. Second pop will be the outer sum.
					sum = stack.pop() * sum;
					sum += stack.pop();
				}
			}
			
			return sum;
		};
		// Implement Stack class 
		// Logic for conversion
		// Take the number 
		// If you encounter a parenthesis then solve it and after that make a expression where it only has
		// +, -, *, / with numbers 
		return ans;
	}
}

module.exports = Calculator;
