let quotes = [
    {quote:"Be yourself; everyone else is already taken." , author:"Oscar Wilde"},
    {quote:"So many books, so little time." , author:"Frank Zappa"},
    {quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." , author:"Albert Einstein"},
    {quote:"A room without books is like a body without a soul." , author:"Marcus Tullius Cicero"},
    {quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." , author:"Bernard M. Baruch"},

    {quote:"If there's one thing I've learned in life, it's the power of using your voice.", author:"Michelle Obama"},
    {quote:"You deserve safety.You deserve protection.You deserve love.You deserve peace.", author:"Tarana Burke"},
    {quote:"I don't like to lose - at anything - yet I've grown most not from victories, but setbacks.",author:"Serena Williams"},
    {quote:"I'm not the next Usain Bolt or Michael Phelps. I'm the first Simone Biles ",author:"Simone Biles."},
    {quote:"This generation is the destiny of our country, and the world.",author:"Kamala Harris."},

    {quote:"Power is not given to you. You have to take it.",author:"Beyoncé"},
    {quote:"Let us not return to what was normal, but reach towards what is next",author:"Amanda Gorman."},
    {quote:"Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.",author:"Oprah Winfrey"},
    {quote:"When someone shows you who they are, believe them - the first time.",author:"Maya Angelou."},
    {quote:"I think it would be a far greater world if people were kinder and more respectful to each other.",author:"Aretha Franklin"},

]

let button = document.getElementById('btn')
let quoteText = document.getElementById('quote')
let authorText = document.getElementById('author');

let lastIndex = -1

button.onclick = function() {
    let randomIndex;

    do{
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex ;

    quoteText.textContent = quotes[randomIndex].quote;
    authorText.textContent = "- " + quotes[randomIndex].author
}