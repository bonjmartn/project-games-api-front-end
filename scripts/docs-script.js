// Get All Playing Cards Copy Text
const getAllPlayingCardsURL = document.getElementById('get-all-playing-cards-URL');
const getAllPlayingCardsClipboard = document.getElementById('get-all-playing-cards-clipboard');
const getAllPlayingCardsTooltip = document.getElementById('get-all-playing-cards-tooltip');
getAllPlayingCardsClipboard.addEventListener('click',(evt) => copyText(getAllPlayingCardsURL, getAllPlayingCardsTooltip, evt));

// Get Playing Card By ID Copy Text
const getPlayingCardByIDURL = document.getElementById('get-playing-card-by-id-URL');
const getPlayingCardByIDClipboard = document.getElementById('get-playing-card-by-id-clipboard');
const getPlayingCardByIDTooltip = document.getElementById('get-playing-card-by-id-tooltip');
getPlayingCardByIDClipboard.addEventListener('click',(evt) => copyText(getPlayingCardByIDURL, getPlayingCardByIDTooltip, evt));

// Get All Tarot Cards Copy Text
const getAllTarotCardsURL = document.getElementById('get-all-tarot-cards-URL');
const getAllTarotCardsClipboard = document.getElementById('get-all-tarot-cards-clipboard');
const getAllTarotCardsTooltip = document.getElementById('get-all-tarot-cards-tooltip');
getAllTarotCardsClipboard.addEventListener('click',(evt) => copyText(getAllTarotCardsURL, getAllTarotCardsTooltip, evt));

// Get Tarot Card By ID Copy Text
const getTarotCardByIDURL = document.getElementById('get-tarot-card-by-id-URL');
const getTarotCardByIDClipboard = document.getElementById('get-tarot-card-by-id-clipboard');
const getTarotCardByIDTooltip = document.getElementById('get-tarot-card-by-id-tooltip');
getTarotCardByIDClipboard.addEventListener('click',(evt) => copyText(getTarotCardByIDURL, getTarotCardByIDTooltip, evt));

// Get All Coins Copy Text
const getAllCoinsURL = document.getElementById('get-all-coins-URL');
const getAllCoinsClipboard = document.getElementById('get-all-coins-clipboard');
const getAllCoinsTooltip = document.getElementById('get-all-coins-tooltip');
getAllCoinsClipboard.addEventListener('click',(evt) => copyText(getAllCoinsURL, getAllCoinsTooltip, evt));

// Get Coin By ID Copy Text
const getCoinByIDURL = document.getElementById('get-coin-by-id-URL');
const getCoinByIDClipboard = document.getElementById('get-coin-by-id-clipboard');
const getCoinByIDTooltip = document.getElementById('get-coin-by-id-tooltip');
getCoinByIDClipboard.addEventListener('click',(evt) => copyText(getCoinByIDURL, getCoinByIDTooltip, evt));

// Get All Dice Copy Text
const getAllDiceURL = document.getElementById('get-all-dice-URL');
const getAllDiceClipboard = document.getElementById('get-all-dice-clipboard');
const getAllDiceTooltip = document.getElementById('get-all-dice-tooltip');
getAllDiceClipboard.addEventListener('click',(evt) => copyText(getAllDiceURL, getAllDiceTooltip, evt));

// Get Die By ID Copy Text
const getDieByIDURL = document.getElementById('get-die-by-id-URL');
const getDieByIDClipboard = document.getElementById('get-die-by-id-clipboard');
const getDieByIDTooltip = document.getElementById('get-die-by-id-tooltip');
getDieByIDClipboard.addEventListener('click',(evt) => copyText(getDieByIDURL, getDieByIDTooltip, evt));

// Get Dice By Color Copy Text
const getDiceByColorURL = document.getElementById('get-dice-by-color-URL');
const getDiceByColorClipboard = document.getElementById('get-dice-by-color-clipboard');
const getDiceByColorTooltip = document.getElementById('get-dice-by-color-tooltip');
getDiceByColorClipboard.addEventListener('click',(evt) => copyText(getDiceByColorURL, getDiceByColorTooltip, evt));

// Get All Words Copy Text
const getAllWordsURL = document.getElementById('get-all-words-URL');
const getAllWordsClipboard = document.getElementById('get-all-words-clipboard');
const getAllWordsTooltip = document.getElementById('get-all-words-tooltip');
getAllWordsClipboard.addEventListener('click',(evt) => copyText(getAllWordsURL, getAllWordsTooltip, evt));

// Get Word By ID Copy Text
const getWordByIDURL = document.getElementById('get-word-by-id-URL');
const getWordByIDClipboard = document.getElementById('get-word-by-id-clipboard');
const getWordByIDTooltip = document.getElementById('get-word-by-id-tooltip');
getWordByIDClipboard.addEventListener('click',(evt) => copyText(getWordByIDURL, getWordByIDTooltip, evt));

// Get Words By Topic Copy Text
const getWordsByTopicURL = document.getElementById('get-words-by-topic-URL');
const getWordsByTopicClipboard = document.getElementById('get-words-by-topic-clipboard');
const getWordsByTopicTooltip = document.getElementById('get-words-by-topic-tooltip');
getWordsByTopicClipboard.addEventListener('click',(evt) => copyText(getWordsByTopicURL, getWordsByTopicTooltip, evt));

// copy the endpoint URL next to the clipboard for each section of documentation
function copyText(textToCopy, showTooltip) {
    // copy text to clipboard
    navigator.clipboard.writeText(textToCopy.innerHTML);
    // show the tooltip then fade it out
    showTooltip.classList.remove("hide");
    showTooltip.classList.add("show");
    showTooltip.classList.add("fade-out");

    // reset the tooltip so it can be shown again when you click again
    setTimeout(() => {
        showTooltip.classList.remove("fade-out");
        showTooltip.classList.remove("show");
        showTooltip.classList.add("hide");
      }, "5000")      
}