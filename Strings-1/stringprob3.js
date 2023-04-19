let str = "example string"; // the given string
let N = str.length; // the length of the string

// iterate over the string and print characters at odd indices
for (let i = 1; i < N; i += 2) {
  console.log(str[i]);
}