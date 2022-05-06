const playingCardsDiv = document.getElementById('about-playing-cards');
const tarotCardsDiv = document.getElementById('about-tarot-cards');
const diceDiv = document.getElementById('about-dice');
const coinsDiv = document.getElementById('about-coins');
const wordsPara = document.getElementById('about-words');
const randomizeButton = document.getElementById('randomize-button');

function getCard() {
  fetch('https://api.projectgamesapi.xyz/v1/cards')
      .then(response => response.json())
      .then(json => {
          let randomNum = Math.floor(Math.random()*(52)+1);
          for (const card of json.data.cards) {
              if (card.id == randomNum) {
                  let image = document.createElement('img');
                  image.src = card.image;
                  playingCardsDiv.appendChild(image);
              }
          }
      })
      .catch(function(error) {
          console.log(error);
      });
}

function getTarot() {
  fetch('https://api.projectgamesapi.xyz/v1/tarot')
      .then(response => response.json())
      .then(json => {
          let randomNum = Math.floor(Math.random()*(78)+1);
          for (const card of json.data.tarot) {
              if (card.id == randomNum) {
                  let image = document.createElement('img');
                  image.src = card.image;
                  tarotCardsDiv.appendChild(image);
              }
          }
      })
      .catch(function(error) {
          console.log(error);
      });
}

function getDice() {
  fetch('https://api.projectgamesapi.xyz/v1/dice')
      .then(response => response.json())
      .then(json => {
          let randomNum = Math.floor(Math.random()*(15)+1);
          for (const dice of json.data.dice) {
              if (dice.id == randomNum) {
                  let image = document.createElement('img');
                  image.src = dice.image;
                  diceDiv.appendChild(image);
              }
          }
      })
      .catch(function(error) {
          console.log(error);
      });
}

function getCoin() {
  fetch('https://api.projectgamesapi.xyz/v1/coins')
      .then(response => response.json())
      .then(json => {
          let randomNum = Math.floor(Math.random()*(10)+1);
          for (const coin of json.data.coins) {
              if (coin.id == randomNum) {
                  let image = document.createElement('img');
                  image.src = coin.image;
                  coinsDiv.appendChild(image);
              }
          }
      })
      .catch(function(error) {
          console.log(error);
      });
}

function getWord() {
  fetch('https://api.projectgamesapi.xyz/v1/words')
      .then(response => response.json())
      .then(json => {
          let randomNum = Math.floor(Math.random()*(10)+1);
          for (const word of json.data.words) {
              if (word.id == randomNum) {
                wordsPara.innerHTML = word.word;
              }
          }
      })
      .catch(function(error) {
          console.log(error);
      });
}

getCard();
getTarot();
getDice();
getCoin();
getWord();

randomizeButton.addEventListener('click', function() { 
    playingCardsDiv.removeChild(playingCardsDiv.firstChild);
    tarotCardsDiv.removeChild(tarotCardsDiv.firstChild);
    diceDiv.removeChild(diceDiv.firstChild);
    coinsDiv.removeChild(coinsDiv.firstChild);
    wordsPara.removeChild(wordsPara.firstChild);

    getCard();
    getTarot();
    getDice();
    getCoin();
    getWord();
});