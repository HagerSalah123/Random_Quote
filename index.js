// "Way 1"
// var quotes = [
//   "\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\"",
//   '"A friend is someone who knows all about you and still loves you."',
//   '"We accept the love we think we deserve."',
//   "\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\"",
//   '"Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this."',
//   '"They say time heals all wounds, but that presumes the source of the grief is finite"',
//   '"This is a new year. A new beginning. And things will change."',
//   "\"Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.\"",
//   '"The fool doth think he is wise, but the wise man knows himself to be a fool."',
//   '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
// ];
// var quoteauther = [
//   "--Dr. Seuss",
//   "--Elbert Hubbard",
//   "--Stephen Chbosky",
//   "--Marilyn Monroe",
//   "--Dave Eggers",
//   "--Cassandra Clare, Clockwork Prince",
//   "--Taylor Swift",
//   "--Lao Tzu",
//   "--William Shakespeare",
//   "--Winston S. Churchill",
// ];

// function RandomQuote() {
//   var randomIndex = Math.floor(Math.random() * quotes.length);
//   var quote = document.getElementById("quote_content");
//   quote.textContent = quotes[randomIndex];
//   var auther = document.getElementById("quote_auther");
//   auther.textContent = quoteauther[randomIndex];
// }

// "Way 2"
var quotes = [
  "\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\"",
  '"A friend is someone who knows all about you and still loves you."',
  '"We accept the love we think we deserve."',
  "\"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.\"",
  '"Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this."',
  '"They say time heals all wounds, but that presumes the source of the grief is finite"',
  '"This is a new year. A new beginning. And things will change."',
  "\"Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.\"",
  '"The fool doth think he is wise, but the wise man knows himself to be a fool."',
  '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
];
var quoteauther = [
  "--Dr. Seuss",
  "--Elbert Hubbard",
  "--Stephen Chbosky",
  "--Marilyn Monroe",
  "--Dave Eggers",
  "--Cassandra Clare, Clockwork Prince",
  "--Taylor Swift",
  "--Lao Tzu",
  "--William Shakespeare",
  "--Winston S. Churchill",
];
var usedQuotes = [];
function RandomQuote() {
  if (usedQuotes.length === quotes.length) {
    usedQuotes = [];
  }
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (usedQuotes.includes(randomIndex));
  usedQuotes.push(randomIndex);
  var quote = document.getElementById("quote_content");
  quote.textContent = quotes[randomIndex];
  var auther = document.getElementById("quote_auther");
  auther.textContent = quoteauther[randomIndex];
}
