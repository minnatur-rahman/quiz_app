const MyBtn = document.querySelector(".MyBtn button");
const RoolsBox = document.querySelector(".RoolsBox");
const exitButton = document.querySelector(".Buttons .ExitButton");
const ContinueButton = document.querySelector(".Buttons .ContinueButton"); 
const Questions = document.querySelector(".Questions");



 MyBtn.onclick = () => {
    RoolsBox.classList.add("activeInfo");
 } 


 exitButton.onclick = () => {
   RoolsBox.classList.remove("activeInfo");
} 


ContinueButton.onclick = () => {
   RoolsBox.classList.remove("activeInfo");
   Questions.classList.add("activeQuiz");
} 