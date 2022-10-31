var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name?\n");
var score = 0;
console.log("Welcome " + userName + " to quiz of Arspl0it");
console.log("Press Q to exit");

function play(question, answer) {
  var userAnswer = readlineSync.question(`${question}\nYour Answer: `).toUpperCase();
  if (userAnswer === answer) {
    console.log("Right!");
    score = score + 1;
  } else {
    if (userAnswer === "Q") {
      return "Quit";
    }
    console.log("Wrong!");
  }
  console.log("Your current score is: " + score);
  console.log("-------------");
}

// array

var questions = [{
  question: `Ⅰ. Where do I exist?
  A. Surface Web
  B. Deep Web
  C. Dark Web
  D. Mariana Web`,
  answer: "C"
}, {
  question: `Ⅱ. What is my favourite exploit?
  A. Encrypt all files
  B. Kernel Exploit
  C. Reverse Shell
  D. Exploit browser`,
  answer: "B"
}, {
  question: `Ⅲ. How can you access me?
  A. Onion links
  B. Direct links
  C. Magnet links
  D. Exploited links`,
  answer: "A"
}, {
  question: `Ⅳ. How do you recon the system dirctly through IP?
  A. SpiderFoot
  B. Open Source Intelligence(OSINT)
  C. Google Dorks
  D. Shodan/Censys`,
  answer: "D"
}, {
  question: `Ⅴ. Who is arspl0it?
  A. Web Exploit
  B. Application worm
  C. Trojan
  D. RAT`,
  answer: "A"
}, {
  question: `Ⅵ. Best of all Hacker Conferences?
  A. Besides
  B. DEFCON
  C. Infosec Europe
  D. SANS Threat intelligence conference`,
  answer: "B"
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  const result = play(currentQuestion.question, currentQuestion.answer);
  if (result === "Quit") {
    console.log(`Bye see you soon again.`)
    break;
  }

}
console.log(`${userName} your final score is: ${score}. Thank you for playing....`);