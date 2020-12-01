const sentence = "hello there from lighthouse labs";

delay = 1000;
let i = 0;

for(const char of sentence) {
  delay += 300;
  setTimeout(() => {
    if (i < sentence.length - 1) {
      process.stdout.write(char);
      i++;
    } else {
      process.stdout.write(char);
      process.stdout.write('\n');
    }
    
  }, delay);
}




