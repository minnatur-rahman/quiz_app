const MyBtn = document.querySelector(".MyBtn button");
const RoolsBox = document.querySelector(".RoolsBox");
const exitButton = document.querySelector(".Buttons .ExitButton");



 MyBtn.onclick = () => {
    RoolsBox.classList.add("activeInfo");
 } 

 exitButton.onclick = () => {
   RoolsBox.classList.remove("activeInfo");
} 