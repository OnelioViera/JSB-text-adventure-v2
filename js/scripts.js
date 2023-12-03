// Start at the beginning of the game
const messages = {
    A: "Welcome to the JavaScript trivia game!", //alert
    A1: "See you later!",
    B: "What is your name?", //this will be our prompt
    C: `${name} let's get started!`, //alert
    D: "For each question, type the letter of the answer you think is correct.", //alert
    E: "Correct! :)", //alert
    F: "Incorrect :(", //alert
    Q1: "Question 1: What is the most common programming language? (A) Python (B) C+ (C) Java (D) JavaScript", //prompt
    Q2: "Question 2: What is JavaScript commonly used for? (A) Web development (B) Data science (C) Mobile app development (D) All of the above", //prompt
    Q3: "Question 3: Which keyword is depprecated? (A) var (B) const (C) let (D) function", //prompt
    Q4: "Question 4: Which DataType is NOT mutable? (A) function (B) array (C) null (D) object", //prompt
    Q5: "Question 5: Which is NOT a truthy value? (A) !Null (B) [Array] (C) !{Object} (D) true ", //prompt
    Q6: "Question 6: Which are logical operators? (A) && (B) || (C) ! (D) All of the above", //prompt
    Q7: "Question 7: Which DataType is NOT immutable? (A) String (B) Object (C) Undefined (D) Null", //prompt
    Q8: "Question 8: Which is NOT an Array method? (A) force (B) shift (C) push (D) splice", //prompt
    Q9: "Question 9: What year was JavaScript released? (A) 1993 (B) 1994 (C) 1995 (D) 1996", //prompt
    Q10: "Question 10: Who invented JavaScript? (A) James Gosling (B) Brendan Eich (C) Douglas Crockford (D) Bjarne Stroustrup", //prompt
}

let totalPointsScored = 0;

function beginGame() {
    const response = confirm(messages.A);
    if (response) {
        const name = prompt(messages.B); // Prompt for the user's name
        if (name) {
            alert(`Alright ${name}, ${messages.C}`);
            question1();
        } else {
            alert("You must enter a name to proceed.");
            beginGame(); // Restart the game if the user didn't enter a name
        }
    } else {
        alert(messages.A1);
    }
}

function question1() {
    // 'prompt' shows a message asking the user to input text. It returns the text or, if CANCEL or Esc is clicked, null.
    const response = prompt(messages.Q1);
    // making sure response is strictly the answer
    if (response === 'D') {
        // if true, runs 'correct!' message
        alert(messages.E);
        // increments points by 1
        totalPointsScored + 1;
        // if answer is not correct answer, runs 'incorrect' message
    } else {
        alert(messages.F)
    }
    // moves on to question 2
    question2();
}

function question2() {
    const response = prompt(messages.Q2);
    if (response === 'D') {
        alert(messages.E);
        totalPointsScored + 1;
    } else {
        alert(messages.F)
    }
    question3();
}

function question3() {
    const response = prompt(messages.Q3);
    if (response === 'A') {
        alert(messages.E);
        totalPointsScored + 1;
    } else {
        alert(messages.F)
    }
    question4();
}

// beginGame()
