const Adagrams = {
  drawLetters() {
    const LETTERS = {
      'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9, 'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6, 'S': 4, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1
    }; // wave 3: make each key into an object containing scores and numbers available?

    // this ensures a more weighted distribution
    const lettersArr = [];
    for (const key in LETTERS) {
      for (let i=0; i<LETTERS[key]; i++) {
        lettersArr.push(key);
      };
    };

    const drawn = [];
    for (let i=0; i<10; i++) {
      let letter = lettersArr[Math.floor(Math.random()*lettersArr.length)];

      // if the number available in the pool is less than 1, a new random value is assigned to letter
      while (LETTERS[letter] < 1) {
        letter = lettersArr[Math.floor(Math.random()*lettersArr.length)];
      };

      // if the letter is available, it is added to the hand and the number available in the pool is decremented 
      drawn[i] = letter;
      LETTERS[letter] -= 1;
    };

    return drawn;
  },
  usesAvailableLetters(input, lettersInHand) {
    // convert input string to object, use hashmap function to lookup if input is included in lettersInHand at expected quantities
    const inputLetterCount = {};
    for (let i=0; i<input.length; i++) {
      if (inputLetterCount[input[i]]) {
        inputLetterCount[input[i]] += 1;
      } else {
        inputLetterCount[input[i]] = 1;
      };
    };

    const handLetterCount = {};
    for (let i=0; i<lettersInHand.length; i++) {
      if (handLetterCount[lettersInHand[i]]) {
        handLetterCount[lettersInHand[i]] += 1;
      } else {
        handLetterCount[lettersInHand[i]] = 1;
      };
    };

    // returns false if input is not included in lettersInHand (null or 0?)
    // returns false when input contains letters repeated more than in lettersInHand
    // otherwise, returns true
    let isValid = undefined;
    input.split('').forEach(letter => {
       if (handLetterCount[letter] == 0 || handLetterCount[letter] !== inputLetterCount[letter]) { 
         isValid = false;
       };
    });
    isValid = true;

    return isValid;
  },
};

// Do not remove this line or your tests will break!
export default Adagrams;