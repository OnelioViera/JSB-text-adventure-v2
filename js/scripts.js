const messages = {
    A: "Welcome to the JavaScript trivia game!", //alert
    A1: "See you later!",
    B: "What is your name?", //this will be our prompt
    C: `let's get started!`, //alert
    D: "For each question, type the letter of the answer you think is correct. The answer is case-sensitive. Pressing OK will skip the question.", //alert
    E: "Correct! :)", //alert
    F: "Incorrect :(", //alert
    G: "No, you can't quit now =)", //alert
    H: "You shall not pass!",
    I: "You skipped the question.",
    Z: "Thanks for playing!",
}

const triviaQuestions = [
    "Question 1: What is the most common programming language? (A) Python (B) C+ (C) Java (D) JavaScript", //prompt
    "Question 2: What is JavaScript commonly used for? (A) Web development (B) Data science (C) Mobile app development   (D) All of the above", //prompt
    "Question 3: Which keyword is depprecated? (A) var (B) const (C) let (D) function", //prompt
    "Question 4: Which DataType is NOT mutable? (A) function (B) array (C) null (D) object", //prompt
    "Question 5: Which is NOT a truthy value? (A) !Null (B) [Array] (C) !{Object} (D) true ", //prompt
    "Question 6: Which are logical operators? (A) && (B) || (C) ! (D) All of the above", //prompt
    "Question 7: Which DataType is NOT immutable? (A) String (B) Object (C) Undefined (D) Null", //prompt
    "Question 8: Which is NOT an Array method? (A) force (B) shift (C) push (D) splice", //prompt
    "Question 9: What year was JavaScript released? (A) 1993 (B) 1994 (C) 1995 (D) 1996", //prompt
    "Question 10: Who invented JavaScript? (A) James Gosling (B) Brendan Eich (C) Douglas Crockford (D) Bjarne Stroustrup"
]

// declaring correctAnswers array
const correctAnswers = ['D', 'D', 'A', 'C', 'C', 'D', 'B', 'A', 'C', 'B']
// declaring totalPointsScored to 0
let totalPointsScored = 0

function beginGame() {
    const response = confirm(messages.A);
    if (response) {
        const name = prompt(messages.B) // Prompt for the user's name.
        if (name) {
            alert(`Alright ${name}, ${messages.C}`);
            alert(messages.D);
            questions();
        } else {
            alert("You must enter a name to proceed.");
            beginGame(); // Restart the game if the user didn't enter a name.
        }
    } else {
        alert(`That's too bad!`);
    }
}

function questions() {
    for (let i = 0; i < triviaQuestions.length; i++) {
        let responses = prompt(triviaQuestions[i]);
        if (responses === correctAnswers[i]) {
            alert(messages.E);
            totalPointsScored++;
        } else if (responses == undefined || '') {
            alert(messages.I);
        } else {
            alert(messages.F);
        }
    }
    displayScore()
}

function calcScore() {
    const points = (totalPointsScored / triviaQuestions.length) * 10;
    return points;
}

function displayScore() {
    const score = calcScore();
    if (score < 7) {
        alert(`Sorry, you failed the quiz! Your score is ${score} out of 10.`);
        let tryAgain = confirm(`Would you like to try again?`);
        if (tryAgain == true) {
            beginGame()
        } else {
            alert(messages.Z)
        }
    } else {
        alert(`Congratulations! You passed the quiz! Your score is ${score} out of 10.`);
        alert(messages.Z);
    }
}