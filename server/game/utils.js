const constants = require("../utilities/constants");

buildDeck = () => {
    let deck = []
    let cardNames = constants.CardNames.values();
    for (let card of cardNames) {
        addToDeck(card, deck);
    }
    deck = shuffleArray(deck)
        
    return deck;
}

function addToDeck(cardName, deck) {
    if (!cardName || !deck) {
        console.log("cardName and deck must not be undefined.")
        return;
    }
    for (let i = 0; i < 3; i++) {
        deck.push(cardName);
    }
}

const shuffleArray = (arr) => {
    if (!arr) {
        console.log(`arr must not be undefined. arr was ${arr}`);
    }

    const return_arr = arr.sort(()=>Math.random()-0.5)
    return return_arr;
}

buildNameSocketMap = (players) => {
    let map = {}
    players.map((x) => {
        map[x.name] = x.socketID;
    })
    return map
}

buildNameIndexMap = (players) => {
    let map = {}
    players.map((x, index) => {
        map[x.name] = index;
    })
    return map
}

buildPlayers = (players) => {
    colors = ['#73C373', '#7AB8D3', '#DD6C75', '#8C6CE6', '#EA9158', '#CB8F8F', '#FFC303']
    shuffleArray(colors);

    players.forEach(x => {
        delete x.chosen;
        x.money = 2;
        x.influences = [];
        x.isDead = false;
        x.color = colors.pop();
        delete x.isReady;
    });
    console.log(players);
    return players;
}

exportPlayers = (players) => {
    players.forEach(x => {
        delete x.socketID;
    });
    return players;
}

module.exports = {
    buildDeck: buildDeck,
    buildPlayers: buildPlayers,
    exportPlayers: exportPlayers,
    shuffleArray: shuffleArray,
    buildNameSocketMap: buildNameSocketMap,
    buildNameIndexMap: buildNameIndexMap
}