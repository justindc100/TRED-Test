function numberToText(numberString) {
  if (isNaN(numberString)) {
    return numberString + " is not a number. Please enter a number.";
  }
  var output = "";
  const length = numberString.length;

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const hundreds = [
    "",
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
  ];

  if (parseInt(numberString) < 1) {
    return "Zero";
  }

  var i = 0;
  do {
    var subStringConverted = "";
    let substring = numberString.slice(-3);
    if (parseInt(substring) > 0) {
      if (substring.length == 3 && substring[0] != "0") {
        subStringConverted += ones[parseInt(substring.charAt(0))] + " Hundred ";
      }

      if (
        parseInt(substring.slice(-2)) < 20 &&
        parseInt(substring.slice(-2)) > 0
      ) {
        subStringConverted += ones[parseInt(substring.slice(-2))];
      } else {
        subStringConverted +=
          tens[parseInt(substring.charAt(1))] +
          " " +
          ones[parseInt(substring.charAt(2))];
      }

      subStringConverted += " " + hundreds[i] + " ";
    }

    numberString = numberString.slice(0, numberString.length - 3);

    output = subStringConverted + output;

    i++;
  } while (i * 3 < length);

  return output;
}

console.log(numberToText("123456789"));
console.log(numberToText("333333"));
console.log(numberToText("0"));
console.log(numberToText("12"));
console.log(numberToText("307"));
console.log(numberToText("1000234"));
console.log(numberToText("123456789123456789"));
console.log(numberToText("testing"));
