
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

// Get random quote from backend
async function getRandomQuote() {
    try {
        newQuoteBtn.disabled = true;
        newQuoteBtn.textContent = "Loading...";

        const response = await fetch("/api/quote");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteElement.textContent = data.text;
        authorElement.textContent = "- " + data.author;

        message.textContent = "";

    } catch (error) {
        quoteElement.textContent = "Unable to load quote. Please try again.";
        authorElement.textContent = "";
        console.error(error);

    } finally {
        newQuoteBtn.disabled = false;
        newQuoteBtn.textContent = "New Quote";
    }
}

// Generate new quote on button click
newQuoteBtn.addEventListener("click", getRandomQuote);

// Copy quote to clipboard
copyBtn.addEventListener("click", async () => {
    const quote = quoteElement.textContent;
    const author = authorElement.textContent;

    try {
        await navigator.clipboard.writeText(
            quote + " " + author
        );

        message.textContent = "Quote copied successfully!";

    } catch (error) {
        message.textContent = "Unable to copy quote.";
    }
});

// Load first quote when page opens
getRandomQuote();
