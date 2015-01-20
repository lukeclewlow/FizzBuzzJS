describe("FizzBuzz", function() {

	var fizzbuzz;

	describe("knows when a number", function() {

		it("is divisible by 3", function() {
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByThree(9)).toBe(true);
		});

		it("is not divisible by 3", function() {
			fizzbuzz = new FizzBuzz();
			expect(fizzbuzz.isDivisibleByThree(2)).toBe(false);
		});

    it("is divisible by 5", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(10)).toBe(true);
    });

    it("is divisible by 3 and 5", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    });

	});

  describe("knows when to say", function(){
    
    it("a number", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.sayNumber(2)).toEqual(2)     
    });
    
    it("fizz", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.sayNumber(3)).toEqual("Fizz!")
    });

    it("buzz", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.sayNumber(5)).toEqual("Buzz!")
    });

    it("fizzbuzz", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.sayNumber(15)).toEqual("FizzBuzz!!")
    });

  });

});