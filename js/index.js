const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint ");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word"); 
const timeText = document.querySelector(".time b");
const inputBtn = document.getElementById("inputBtn")

let correctWord,timer;

function initTimer(maxTime) {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}


const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)]; //get random object from words js
    let wordArray = randomObj.word.split(""); //splitting each letter of the random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; //shuffle using fischer yates
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    
}
initGame();

function checkWordEnter(e){
    if(e.key === "Enter"){
        checkWord();
    }
    
}

inputBtn.addEventListener('keypress',checkWordEnter)



const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
    alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
    
    initGame();
}

// Create an audio element and set its attributes
const audio = document.createElement('audio');
audio.setAttribute('src', '/Users/User./Desktop/AWWAL CODE/NEW AWWAL/Y2MATE/Word Scramble/X2Download.app - 12 Hours of Free Background Music - Copyright Free Music for Creators and Streamers (64 kbps).mp3');
audio.setAttribute('loop', 'true');

// Attach the audio element to the body of the page
document.body.appendChild(audio);

// Play the music when the page loads
window.addEventListener('load', () => {
  audio.play();
});


refreshBtn.addEventListener('click',initGame)
checkBtn.addEventListener('click',checkWord)
