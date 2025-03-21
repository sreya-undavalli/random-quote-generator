const quotes = [
    {
        "content": "The best way to predict the future is to invent it.",
        "author": "Alan Kay"
    },
    {
        "content": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    },
    {
        "content": "Do what you can, with what you have, where you are.",
        "author": "Theodore Roosevelt"
    }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").innerText = `"${quote.content}" - ${quote.author}`;
}

document.getElementById("new-quote").addEventListener("click", getRandomQuote);
