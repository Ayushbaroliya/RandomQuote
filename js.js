const button = document.querySelector("#generate-btn");
const box = document.querySelector("#quote-text");

// ---- Offline Backup Quotes (50 quotes) ----
const backupQuotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Get busy living or get busy dying.", author: "Stephen King" },
  { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
  { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
  { quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { quote: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { quote: "Whoever is happy will make others happy too.", author: "Anne Frank" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { quote: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { quote: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },
  { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
  { quote: "May you live all the days of your life.", author: "Jonathan Swift" },
  { quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.", author: "Marilyn Monroe" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { quote: "A journey of a thousand miles begins with a single step.", author: "Laozi" },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "It's not what happens to you, but how you react to it that matters.", author: "Epictetus" },
  { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { quote: "We become what we think about.", author: "Earl Nightingale" },
  { quote: "An unexamined life is not worth living.", author: "Socrates" },
  { quote: "Eighty percent of success is showing up.", author: "Woody Allen" },
  { quote: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { quote: "I am the master of my fate, the captain of my soul.", author: "William Ernest Henley" },
  { quote: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein" },
  { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
  { quote: "Go confidently in the direction of your dreams!", author: "Henry David Thoreau" },
  { quote: "What we think, we become.", author: "Buddha" },
  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  { quote: "People will never forget how you made them feel.", author: "Maya Angelou" },
  { quote: "A rich man is one whose children run into his arms when his hands are empty.", author: "Unknown" },
  { quote: "It is not what you look at that matters, it is what you see.", author: "Henry David Thoreau" }
];


button.addEventListener("click", async () => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();


    box.innerText = `"${data.quote}"\n\n— ${data.author}`;
  } catch (err) {

    
    let random = Math.floor(Math.random() * backupQuotes.length);
    box.innerText = `"${backupQuotes[random].quote}"\n\n— ${backupQuotes[random].author}`;
  }
});
