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
   showQuestions (3);
} 

function showQuestions (index) {
   const que_tex = document.querySelector(".text");
   const option_list = document.querySelector(".MyOptions");
   
   let que_tag = "<span>" + questions[index].num+ '.' + questions[index].question + "<span>";
   que_tex.innerHTML = que_tag
}