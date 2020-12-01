const sentence = "hello there from lighthouse labs";

//console.log('chatAt:  ', sentence.charAt(0));

// setTimeout(() => {
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.

// setTimeout(() => {
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.

delay = 1000;
let i;
for(const char of sentence) {
  i++;
  delay += 300;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
}
if (i === sentence.length) {
  console.log(' ');
}

// setTimeout(() => {
//   console.log(sentence.charAt(0));
// }, 1000);

// setTimeout(() => {
//   console.log(sentence.charAt(1));
// }, 1500);

// setTimeout(() => {
//   console.log(sentence.charAt(2));
// }, 2000);