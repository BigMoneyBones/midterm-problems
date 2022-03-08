function isEvenlyDivisible(num1, num2) {
  //If num1 goes into num2 with no remainder, it is evenly divisible.
  if (num1 % num2 === 0) {

    return true;

  } else {

    return false;

  }

}

function halfSquare(num) {

  return Math.pow(num, 2) / 2;


}

function isLong(str) {

  if (str.length >= 15) {

    return true;

  } else if (str.length < 15) {

    return false;

  }

}

function exclaim(str) {

  let newString = "";

  for (let i = 0; i < str.length; i++) {

    if (str[i] !== '!') {

      newString += str[i];

    } 
    // if (str[str.length-1] !== '!') {

    //   return str + '!';

    // } else if (str[str.length-1] === '!') {

    //   return str;

    //}
  }

  return newString+ "!";

}

function countWords(str) {

  const wordArr = str.split(" ");

  return wordArr.length;

}

function containsDigit(str) {

  let digits = "0123456789";
  // let nonDigits = "abcdefghijklmnopqrstuvwxyz";
  // let mixedDigits = "01234567689abcdefghijklmnopqrstuvwxyz"

  for (let i = 0; i < str.length; i++) {

    if (digits.includes(str[i])) {

      return true;

    }

  }

  return false;

}

function containsLowerCase(str) {

  let lowerCase = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < str.length; i++) {

    if (lowerCase.includes(str[i])) {

      return true;

    }

  }

  return false;

}

function containsUpperCase(str) {

  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < str.length; i++) {

    if (upperCase.includes(str[i])) {

      return true;

    }

  }

  return false;

}

function containsNonAlphanumeric(str) { 

  let alphaNumeric = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < str.length; i++) {

    if (!alphaNumeric.includes(str[i])) {

      return true;

    }

  }

  return false;

}

function containsSpace(str) { 

  let space = ' ';
  // let onlyLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // let onlyNumbers = '0123456789';

  for (let i = 0; i < str.length; i++) {

    if (space.includes(str[i])) {

      return true;

    }

  }

  return false;

}

function digits(num) { 

  let str = num.toString();

  let numArray = [];  

  for (let i = 0; i < str.length; i++) {

    if (str[i] === '0' || str[i] === '1' || str[i] === '2' || str[i] === '3' || str[i] === '4' || str[i] === '5' || str[i] === '6' || str[i] === '7' || str[i] === '8' || str[i] === '9') {

      numArray.push(Number(str[i]));

    }

  }

  return numArray;

}

function truncate(str) {

  let shortString = "";

  if (str.length < 15) {

    return str;

  }

  for (let count = 0; count < 8; count++) {


    if (str.length >= 15) {

      shortString += str[count];

    }

  }

  return shortString + "...";

}

function isValidPassword(str) {

  if (containsDigit(str) === true && containsLowerCase(str) === true && containsNonAlphanumeric(str) === true && containsUpperCase(str) === true && containsSpace(str) === false) {

    return true;

  }

  return false;

}

function onlyPunchy(titlesArray) {

  for (let i = 0; i < titlesArray.length; i++) {

    titlesArray[i] = exclaim(titlesArray[i]);

    if (isLong(titlesArray[i]) === true) {

      titlesArray.splice(i, 1)

    }

  }

  return titlesArray;

}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}