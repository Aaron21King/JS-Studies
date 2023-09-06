const goal = document.getElementById('goal');
const shootButton = document.getElementById('shootButton');
const saveButton = document.getElementById('saveButton');
const totalShots = document.getElementById('totalShots');
const goalsScored = document.getElementById('goalsScored');
const savesMade = document.getElementById('savesMade');

let totalShotsCount = 0;
let goalsScoredCount = 0;
let savesMadeCount = 0;
function shootPenalty() {
    totalShotsCount++;
    totalShots.textContent = totalShotsCount;

    const randomResult = Math.random();
    if (randomResult <= 0.5) {
        goalsScoredCount++;
        goalsScored.textContent = goalsScoredCount;
        goal.classList.add('scored'); 
    } else {
        savesMadeCount++;
        savesMade.textContent = savesMadeCount;
        goal.classList.add('saved'); 
    }
    shootButton.disabled = true;
    saveButton.disabled = true;
    setTimeout(resetState, 1500);
}
function savePenalty() {
    totalShotsCount++;
    totalShots.textContent = totalShotsCount;

    const randomResult = Math.random();
    if (randomResult <= 0.5) {
        goalsScoredCount++;
        goalsScored.textContent = goalsScoredCount;
        goal.classList.add('scored'); 
    } else {
        savesMadeCount++;
        savesMade.textContent = savesMadeCount;
        goal.classList.add('saved');
    }
    shootButton.disabled = true;
    saveButton.disabled = true;

    setTimeout(resetState, 1500);
}
function resetState() {
    goal.classList.remove('scored', 'saved'); 
    shootButton.disabled = false;
    saveButton.disabled = false;
}
shootButton.addEventListener('click', shootPenalty);
saveButton.addEventListener('click', savePenalty);