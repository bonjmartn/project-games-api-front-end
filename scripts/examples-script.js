// -------------------//
// Example 1
// -------------------//

// variable for a div in the HTML with an id of 'all-dice'
const diceDiv = document.getElementById('all-dice');

// connect to dice endpoint
fetch('https://api.projectgamesapi.xyz/v1/dice')
    .then(response => response.json())
    .then(json => {
        // this console.log is useful to see the json response
        console.log(json);
        // loop through all dice faces
        for (const die of json.data.dice) {
            // create an image element
            let image = document.createElement('img');
            // assign the image file to each item
            image.src = die.image;
            // add each new image to the div
            diceDiv.appendChild(image);
        }
    })
    .catch(function(error) {
        console.log(error);
    });

// -------------------//
// Example 2
// -------------------//

// variables for HTML elements
const twoCardsDiv = document.getElementById('two-cards');
const drawTwoCardsButton = document.getElementById('draw-two-cards');

function drawTwoCards() {
    // connect to cards endpoint
    fetch('https://api.projectgamesapi.xyz/v1/cards')
        .then(response => response.json())
        .then(json => {
            // this console.log is useful to see the json response
            console.log(json);

            // generate two random numbers between 1 and 52
            let randomCardID1 = Math.floor(Math.random()*(52)+1);
            let randomCardID2 = Math.floor(Math.random()*(52)+1);

            // loop through all cards
            for (const card of json.data.cards) {            
                // if the card ID matches the random number, that's the card to draw
                if (card.id == randomCardID1 || card.id == randomCardID2) {
                    // create an image element
                    let image = document.createElement('img');
                    // assign the image file to each item
                    image.src = card.image;
                    // add each new image to the div
                    twoCardsDiv.appendChild(image);
                }
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

// call the function to draw two cards
drawTwoCards();

// button to draw two new cards
drawTwoCardsButton.addEventListener('click', function() { 
    // reset the cards by removing the current children
    while (twoCardsDiv.firstChild) {
        twoCardsDiv.removeChild(twoCardsDiv.firstChild);
    }
    // draw two new cards by calling the function again
    drawTwoCards();
});

// -------------------//
// Example 3
// -------------------//

// variables for HTML elements
const originalWord = document.getElementById('original-word');
const shuffledWord = document.getElementById('shuffled-word');
const newWordButton = document.getElementById('new-word-button');

function getWord() {
    // connect to words endpoint
    fetch('https://api.projectgamesapi.xyz/v1/words')
        .then(response => response.json())
        .then(json => {
            // this console.log is useful to see the json response
            console.log(json);
            // create an array for the word
            let wordArray = new Array();
            // generate a random number between 1 and the number of possible words
            let max = json.data.rows_returned;
            let randomNum = Math.floor(Math.random()*(max)+1);

            // loop through all words
            for (const word of json.data.words) {            
                // if the word ID matches the random number, that's our word
                if (word.id == randomNum) {
                    // get the actual word out of the "word" object
                    let chosenWord = word.word;
                    // add the word to the paragraph in the HTML
                    originalWord.innerHTML = chosenWord;
                    // create an array of letters from the word
                    wordArray = Array.from(chosenWord);
                    // randomize the array
                    // The Fisher Yates Method
                    // https://www.w3schools.com/js/js_array_sort.asp
                    for (let i = wordArray.length -1; i > 0; i--) {
                        let j = Math.floor(Math.random() * i);
                        let k = wordArray[i];
                        wordArray[i] = wordArray[j];
                        wordArray[j] = k;
                    }
                    // add the shuffled word to the paragraph in the HTML
                    shuffledWord.innerHTML = wordArray.join('');
                }
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

// call the main function
getWord();

// event listener on the button that gets a new word
newWordButton.addEventListener('click', function() { 
    // get a new word by calling the function again
    getWord();    
});

// -------------------//
// Example 4
// -------------------//

// variables for HTML elements
const tarotImage = document.getElementById('tarot-card');
const tarotName = document.getElementById('tarot-card-name');
const tarotDescription = document.getElementById('tarot-card-description');
const tarotButton = document.getElementById('new-tarot-card');

function getOneTarotCard() {
    //connect to tarot endpoint
    fetch('https://api.projectgamesapi.xyz/v1/tarot')
        .then(response => response.json())
        .then(json => {
            // this console.log is useful to see the json response
            console.log(json);
            // generate a random number between 1 and 78
            let randomNum = Math.floor(Math.random()*(78)+1);

            // loop through all tarot cards
            for (const card of json.data.tarot) {            
                // if the card ID matches the random number, that's the card to draw
                if (card.id == randomNum) {
                    // assign the image src to the image tag in the HTML
                    tarotImage.src = card.image;
                    // populate the card name
                    // adding suit name only if it's not the Major suit
                    if (card.id < 23) {
                        tarotName.innerHTML = card.name;
                    }
                    else {
                        tarotName.innerHTML = card.name + " of " + card.suit; 
                    }
                    // populate the card description
                    tarotDescription.innerHTML = card.description;
                }
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

// call the main function
getOneTarotCard();

// event listener on the button that gets a new card
tarotButton.addEventListener('click', function() { 
    // get a new card by calling the function again
    getOneTarotCard();    
});

// -------------------//
// Example 5
// -------------------//

// variables for HTML elements
const coinsDiv = document.getElementById('four-coins');
const coinsTotal = document.getElementById('coins-total');
const coinsButton = document.getElementById('coins-button');

function getCoins() {
    //connect to coins endpoint
    fetch('https://api.projectgamesapi.xyz/v1/coins')
        .then(response => response.json())
        .then(json => {
            // this console.log is useful to see the json response
            console.log(json);
            // variable for the total value of all four coins
            let total = 0;

            // loop through 4 times to get 4 coins 
            for (let i = 0; i < 4; i++) {              
                // generate a random number between 1 and the number of possible coins
                let max = json.data.rows_returned;
                let randomNum = Math.floor(Math.random()*(max)+1);
                // loop through all coins
                for (const coin of json.data.coins) {
                    // if the coin ID matches the random number, that's our coin
                    if (coin.id == randomNum) {
                        // add coin value to the total
                        total = total + coin.value;
                        // create an image element
                        let image = document.createElement('img');
                        // assign the image file to each item
                        image.src = coin.image;
                        // add each new image to the div
                        coinsDiv.appendChild(image);
                    }
                }
            }
            // divide total by 100 to get an amount in cents
            total = total/100;
            // makes the number display to 2 decimal places (such as 0.30 instead of 0.3)
            total = (Math.round(total * 100) / 100).toFixed(2);
            // populate the coin total text
            coinsTotal.innerHTML = total;
        })
        .catch(function(error) {
            console.log(error);
        });
}

// call the main function
getCoins();

// event listener on the button that gets new coins
coinsButton.addEventListener('click', function() { 
    // reset the coins by removing the current children
    while (coinsDiv.firstChild) {
        coinsDiv.removeChild(coinsDiv.firstChild);
    }
    // get new coins by calling the function again
    getCoins();    
});

// -------------------//
// Example 6
// -------------------//

// variables for HTML elements
const fiveDiceDiv = document.getElementById('five-dice');
const diceTotal = document.getElementById('dice-total');
const diceButton = document.getElementById('dice-button');

function getFiveDice() {
    //connect to dice endpoint for only white dice
    fetch('https://api.projectgamesapi.xyz/v1/dice/white')
        .then(response => response.json())
        .then(json => {
            // this console.log is useful to see the json response
            console.log(json);
            // variable for the total value of all five dice
            let total = 0;

            // loop through 5 times to get 5 dice
            for (let i = 0; i < 5; i++) {
                // generate a random number between 1 and 6
                let randomNum = Math.floor(Math.random()*(6)+1);
                // loop through all dice
                for (const dice of json.data.dice) {
                    // if the die ID matches the random number, that's our die
                    if (dice.id == randomNum) {
                        // add dice value to the total
                        total = total + dice.value;
                        // create an image element
                        let image = document.createElement('img');
                        // assign the image file to each item
                        image.src = dice.image;
                        // add each new image to the div
                        fiveDiceDiv.appendChild(image);
                    }
                }
            }
            // populate the dice total text
            diceTotal.innerHTML = total;
        })
        .catch(function(error) {
            console.log(error);
        });
}

// call the main function
getFiveDice();

// event listener on the button that gets new dice
diceButton.addEventListener('click', function() { 
    // reset the dice by removing the current children
    while (fiveDiceDiv.firstChild) {
        fiveDiceDiv.removeChild(fiveDiceDiv.firstChild);
    }
    // get new dice by calling the function again
    getFiveDice();    
});