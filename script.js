const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letter');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notificationEl = document.getElementById('notification-container');
const finalMessageEl = document.getElementById('final-message');

const figureParts = document.querySelectorAll('figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];
displayWord();
function displayWord() {
    document.body.addEventListener('keyup', (e) => {
        for(let i =0; i<= selectedWord.length; i++){
            if(e.key == selectedWord[i]) {
                
                console.log('matched');
                correctLetters[i] = e.key;
                
                


            } else {
                
                
            }
        }
        
    })
    console.log(correctLetters, 'he')
    
}
