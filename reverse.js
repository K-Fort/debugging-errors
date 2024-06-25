var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  //'original' is declared but its value is never read.
  //Could not find name 'orignal'. Did you mean 'original'?
  //Misspelling, fix it for original
  return original.split('').reverseList().join('');
}