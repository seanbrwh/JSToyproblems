/* 
create all permutations of an input string and remove duplicates, if present. 
This means, you have to shuffle all letters from the input in all possible orders. */
/* 
permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] 
*/
function permutations(string) {
  let letters = string.split('')
      , results = [[letters.shift()]] 
    while (letters.length) {
        const currLetter = letters.shift()
        let tmpResults = []
        results.forEach(result => {
            let rIdx = 0
            while (rIdx <= result.length) {
                const tmp = [...result]
                tmp.splice(rIdx, 0, currLetter)
                tmpResults.push(tmp)
                rIdx++
            }
        })
        results = tmpResults
    }
    return results
      .map(letterArray => letterArray.join(''))
      .filter((el, idx, self) => (self.indexOf(el) === idx))
      .sort()
}

/* Find Uniq Number */
function findUniq(arr) {
  let dup = [...new Set(arr)]
  let one = []
  let two = []
  arr.map(e=>{
    e === dup[1] ? one.push(e) : two.push(e)
  })
  console.log(one, two)
    return one.length === 1 ? +one[0] : +two[0]
}

/*Pig Latin */
function pigLatin(str){
  let fin = []
    let words = str.split(' ')
    words.map(e=>{
      let letters = e.split('').shift()
      fin.push(e.slice(1) + letters + 'ay')
    })
    return fin.join(' ').replace(/!ay/g, '!').replace(/\?ay/g, '?')
}

/* Decode Morse Code */
function decodeMorse(MC){
  var messageConverted = [];
  MC.split("   ").map(word=>{
    word.split(" ").map(letter=>{
        messageConverted.push(MORSE_CODE[letter]);
    });
    messageConverted.push(" ");
});
return messageConverted.join("").trim()
}

 /* Meeting */
function meeting(s) {  
    var ans = []
    s = s.toLowerCase()
    s = s.split(';')
    s = _.chunk(s, 1)
    s.forEach((e,i,a)=>{
      e = e.join('').split(':')      
      ans.push(`${e[1]}:${e[0]}`)
    })
    return ans.sort().map(e=>`(${e})`).join('').replace(/:/g, ', ').toUpperCase();
}

/*Greed is Good */

function score( dice ) {
  // 3 1's 1000 points 3 6's 600 points 3 5's 500 points 
  // 3 4's 400  points 3 3's 300 points 3 2's 200 pints 
  // 1 1   100  points 1 5    50 points
  var score = {
    six:[],
    five:[],
    four:[],
    three:[],
    two:[],
    one:[]
  };
  dice
  .map
  (e=> e == 6 ? score.six.push(e) 
  : e == 5 ? score.five.push(e) 
  : e == 4 ? score.four.push(e) 
  : e == 3 ? score.three.push(e) 
  : e == 2 ? score.two.push(e) 
  : e == 1 ? score.one.push(e) : null)
  
  score.six = score.six.length
  score.five = score.five.length
  score.four = score.four.length
  score.three = score.three.length
  score.two = score.two.length
  score.one = score.one.length
  var final = 0;

  
  score.six >= 3 ? final += 600 : score.five >= 3 ? final += 500 : score.four >= 3 ? final += 400 : score.three >= 3 ? final += 300 : score.two >= 3 ? final += 200 : score.one >= 3 ? final += 1000 : 0;
  score.one >= 4 ? final += 100 : 0
  score.one == 2 ? final += 200 : 0
  score.five > 0 && score.five < 3 ? final += 50 : 0
  
  console.log(score)
  console.log(final)
  return final
  
}

/* Multiples of 3 & 5 */

function solution(n){
  // all multiples of 3 and 5 below n then get the sum
  var sum = []
  for(let i = 0; i < n; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum.push(i)
    }
  }
  return sum.reduce((t,e)=> t+e,0)
}

/* Is number Prime */

function isPrime(num) {
  let prime = true 
   for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}

/* Alphabatized */

function alphabetized(s) {
  return _.sortBy(s.replace(/[^a-z]/ig, ''), _.toLower).join('');
};


/*Test Result */

function testResult(array) {
  const avg = (array.reduce((a,b) => a + b)/array.length).toFixed(3);
  const h = array.filter(a => a > 8).length;
  const a = array.filter(b => b > 6 && b < 9).length;
  const l = array.filter(c => c < 7).length;
  const res = [parseFloat(avg), {'h' : h, 'a' : a, 'l' : l}];
  return ( l == 0 && a == 0 && h !== 0) ? res.concat("They did well") : res;
}
