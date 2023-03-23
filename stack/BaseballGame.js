function calPoints(operations) {
  let x = [];
  let sum = 0;
  if (1 <= operations.length <= 1000) {
    for (let i = 0; i < operations.length; i++) {
      if (
        operations[i] &&
        operations[i] !== "C" &&
        operations[i] !== "D" &&
        operations[i] !== "+"
      ) {
        x.push(+operations[i]);
      }

      if (operations[i] === "C") {
        x.pop();
      }

      if (operations[i] === "D") {
        let item = x[x.length - 1] * 2;
        x.push(item);
      }

      if (operations[i] === "+") {
        if (x.length > 1) {
          let item = x[x.length - 1] + x[x.length - 2];
          x.push(item);
        }
      }
    }
  }
  x.forEach(item => {
    sum += item;
});
  console.log(sum);
  return sum;
}

// console.log(
calPoints(["2", "4", "C", "9", "D", "1", "3", "+"]);
// );
