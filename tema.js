const initialValues = [1, 4, 8, "Diana", true, ["Mihnea", "Alex", false, 4, 9]];
const otherValues = ["Vreau la mare", 2023, "La soare", [30, 8, 23], 8, 9];

initialValues.push(otherValues);

let sum = 0;

for (let i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] == 'number') {
    // console.log(typeof initialValues[i]);
    initialValues[i] = 2 + initialValues[i];
    console.log(initialValues[i]);
  }

}
console.log(initialValues);

for (let i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] == "string") {
    // console.log(typeof initialValues[i]);
    initialValues[i] = 'happy codding ' + initialValues[i];
    console.log(initialValues[i]);
  }

}
console.log(initialValues);

for (let i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] == "boolean") {
    // console.log(typeof initialValues[i]);
    initialValues[i] = ! (initialValues[i]);
    console.log(initialValues[i]);
  }

}
console.log(initialValues);