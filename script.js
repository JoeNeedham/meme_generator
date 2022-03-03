// let apiQuotes = [];

// Show New Quote
function NewQuote() {
    
    // Pick a random quote from apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    console.log(quote);
}

// Get Quotes from API
// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         NewQuote()
//     } catch (error) {
//         // Catch Error Here
//     }
// }

// On Load
// getQuotes();
NewQuote()

