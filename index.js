let images = ["bus.png", "car.png", "cherries.png", "dog.jpg", "flower.png", "tree.jpg"];
let imagePairs = [...images, ...images]; // Duplicate the array to create pairs
let imgBackEl = document.querySelectorAll(".img-back");
let flippedCards = [];
let matchedCards = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    shuffleArray(imagePairs);

    imgBackEl.forEach((img, index) => {
        img.src = "./images/question-mark.png";
        img.alt = "question mark";
        img.onclick = () => flipCard(img, index);
    });

    let startButton = document.getElementById("startGame-button");
    startButton.textContent = "RESET BUTTON";

    flippedCards = [];
    matchedCards = [];
}

function flipCard(card, index) {
    if (flippedCards.length < 2) {
        card.src = "./images/" + imagePairs[index];
        flippedCards.push(card);
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.src === card2.src) {
        matchedCards.push(card1, card2);
        if (matchedCards.length === imagePairs.length) {
            alert("Congratulations! You've matched all pairs. Click 'OK' to reset game.");
            startGame();
        }
    } else {
        card1.src = card2.src = "./images/question-mark.png";
    }
    flippedCards = [];
}
