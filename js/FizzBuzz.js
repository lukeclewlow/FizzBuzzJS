var FizzBuzz = function() {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
	return number % 3 === 0;
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
	return number % 5 == 0;
};

FizzBuzz.prototype.isDivisibleByThreeAndFive = function(number) {
	return (number % 5 === 0)&&(number % 3 === 0);
};

FizzBuzz.prototype.sayNumber = function(number) {
	if (this.isDivisibleByThree(number) === true){
		return "Fizz!"	
	}
	else if (this.isDivisibleByFive(number) === true){
		return "Buzz!"
	}
	else if (this.isDivisibleByThreeAndFive(number) === true) {
		return "Fizzbuzz!!"
	}
	else {return number}
};