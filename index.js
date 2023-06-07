let homeScore = 0;
let guestScore = 0;
const homeScoreElement = document.getElementById('js-home-score');
const guestScoreElement = document.getElementById('js-guest-score');

function updateScore() {
    homeScoreElement.textContent = homeScore;
    guestScoreElement.textContent = guestScore;
}

updateScore();

function increaseScore(who, amount) {

    if (who === 'home' && amount === 1) {
        homeScore += 1;

    } else if (who === 'home' && amount === 2) {
        homeScore += 2;

    } else if (who === 'home' && amount === 3) {
        homeScore += 3;

    } else if (who === 'guest' && amount === 1) {
        guestScore += 1;

    } else if (who === 'guest' && amount === 2) {
        guestScore += 2;

    } else if (who === 'guest' && amount === 3) {
        guestScore += 3;
    }

    updateScore();
}