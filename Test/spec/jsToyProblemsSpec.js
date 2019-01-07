describe('Find Permutations', function () {
	describe('permuatations', function () {
		it('should exist and be a function', function () {
			expect(permutations).toBeDefined();
			expect(permutations).toEqual(jasmine.any(Function))
		})
		it('Should return an Array', ()=>{
			var str = 'ab'
			expect(permutations(str)).toEqual(jasmine.any(Array))
		})
	})
})


describe('Find unique Number', function () {
	describe('findUniq', ()=>{
		it('should exist and be a function', ()=> {
			expect(findUniq).toBeDefined();
			expect(findUniq).toEqual(jasmine.any(Function))
		})
		it('should return a number', ()=>{
			var arr = [1,1,2,1,1]
			expect(findUniq(arr)).toEqual(jasmine.any(Number))
		})
	})
})
describe('Pig Latin', function () {
	describe('pigLatin', ()=>{
		it('should exist and be a function', ()=> {
			expect(pigLatin).toBeDefined();
			expect(pigLatin).toEqual(jasmine.any(Function))
		})
		it('should return a string', ()=>{
			let str = 'Hello how are you!'
			expect(pigLatin(str)).toEqual(jasmine.any(String))
		})
	})
})
describe('Decode Morse Code', function () {
	describe('decodeMorse', ()=>{
		it('should exist and be a function', ()=> {
			expect(decodeMorse).toBeDefined();
			expect(decodeMorse).toEqual(jasmine.any(Function))
		})
	})
})
describe('Meeting', function () {
	describe('meeting', ()=>{
		it('should exist and be a function', ()=> {
			expect(meeting).toBeDefined();
			expect(meeting).toEqual(jasmine.any(Function))
		})
	})
})

describe('Greed is good', function () {
	describe('meeting', ()=>{
		it('should exist and be a function', ()=> {
			expect(score).toBeDefined();
			expect(score).toEqual(jasmine.any(Function))
		})
	})
})
describe('Multiples of 3 and 5', function () {
	describe('solution', ()=>{
		it('should exist and be a function', ()=> {
			expect(solution).toBeDefined();
			expect(solution).toEqual(jasmine.any(Function))
		})
	})
})

describe('Is the number Prime', function () {
	describe('isPrime', ()=>{
		it('should exist and be a function', ()=> {
			expect(isPrime).toBeDefined();
			expect(isPrime).toEqual(jasmine.any(Function))
		})
	})
})

describe('alphabetized', function () {
	describe('isPrime', ()=>{
		it('should exist and be a function', ()=> {
			expect(alphabetized).toBeDefined();
			expect(alphabetized).toEqual(jasmine.any(Function))
		})
	})
})

describe('Test Results', function () {
	describe('isPrime', ()=>{
		it('should exist and be a function', ()=> {
			expect(testResult).toBeDefined();
			expect(testResult).toEqual(jasmine.any(Function))
		})
	})
})