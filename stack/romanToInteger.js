let romanToIn = (s) => {
  let sum = 0;
  let numbers = [];
  let letters = s.split("");
  console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    // HANDLE I
    if (letters[i] === "I" && letters[i + 1] === "V") {
      //   numbers.push(+4);
      letters.splice(i, 1, "IV");
      letters.splice(i + 1, 1);
    } else if (letters[i] === "I" && letters[i + 1] === "X") {
      //   numbers.push(+9);
      letters.splice(i, 1, "IX");
      letters.splice(i + 1, 1);
    }

    // HANDLE X
    if (
      letters[i] === "X" &&
      letters[i - 1] !== "I" &&
      letters[i + 1] === "L"
    ) {
      //   numbers.push(+4);
      letters.splice(i, 1, "XL");
      letters.splice(i + 1, 1);
    } else if (
      letters[i] === "X" &&
      letters[i - 1] !== "I" &&
      letters[i + 1] === "C"
    ) {
      //   numbers.push(+9);
      letters.splice(i, 1, "XC");
      letters.splice(i + 1, 1);
    }

    // HANDLE C
    if (
      letters[i] === "C" &&
      letters[i - 1] !== "X" &&
      letters[i + 1] === "D"
    ) {
      //   numbers.push(+4);
      letters.splice(i, 1, "CD");
      letters.splice(i + 1, 1);
    } else if (
      letters[i] === "C" &&
      letters[i - 1] !== "X" &&
      letters[i + 1] === "M"
    ) {
      //   numbers.push(+9);
      letters.splice(i, 1, "CM");
      letters.splice(i + 1, 1);
    }


    if (letters[i] === "I") numbers.push(1);
    if (letters[i] === "IV") numbers.push(+4);
    if (letters[i] === "V") numbers.push(+5);
    if (letters[i] === "IX") numbers.push(+9);
    if (letters[i] === "X") numbers.push(+10);
    if (letters[i] === "XL") numbers.push(+40);
    if (letters[i] === "L") numbers.push(+50);
    if (letters[i] === "XC") numbers.push(+90);
    if (letters[i] === "C") numbers.push(+100);
    if (letters[i] === "CD") numbers.push(+400);
    if (letters[i] === "D") numbers.push(+500);
    if (letters[i] === "CM") numbers.push(+900);
    if (letters[i] === "M") numbers.push(+1000);
  }
  numbers.forEach((item) => {
    sum += item;
  });
  return sum;
//   console.log(sum);
//   return numbers;
};

console.log(romanToIn("MCMXCIV"
));
// romanToIn("IVXMCD");
