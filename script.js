const quoteText = document.getElementById('quotes');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');

//get quote from API
async function getQuote(){
const apiUrl = 'https://type.fit/api/quotes/?method=getQuote&lang=en&format=json';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    let number = Math.floor(Math.random() * data.length);
    let quote;
    if (data[number].author === null) {
      quote = data[number]
      quote.author = "Unknown author";
    } else {
      quote = data[number];
    }
    quoteText.innerText = quote.text;
    authorText.innerText = quote.author;
  } catch (error) {  
    alert('Seems like it is' + error);
  }
}

//add function for twiting quotes
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

//add Event Listeners to trigger both button
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

//loading
 getQuote();