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
   showQuestions (0);
} 
const nextBtn = document.querySelector(".nextBtn");


let que_count = 0;

nextBtn.onclick = () => {
   if(que_count <questions.length - 1) {
      que_count ++
      showQuestions(que_count);
   }else{
      console.log("You Have Complate Your Task");
      
   }
}


function showQuestions (index) {
   const que_tex = document.querySelector(".text");
   const option_list = document.querySelector(".MyOptions");
   let option_tag = '<div class="options">'+questions[index].option[0]+'</div>'
                    +'<div class="options">'+questions[index].option[1]+'</div>'
                    +'<div class="options">'+questions[index].option[2]+'</div>'
                    +'<div class="options">'+questions[index].option[3]+'</div>'
                  

   let que_tag = "<span>" + questions[index].num+ '.' + questions[index].question + "<span>";
   que_tex.innerHTML = que_tag;
   option_list.innerHTML = option_tag;
   const total_que = document.querySelector(".total_que");
   let total_queTag = '<p>' + questions[index].num+'of 5</p>'
   total_que.innerHTML = total_queTag;


   const option = option_list.querySelectorAll(".options");
   for(let i=0; i<option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
   }
}

function optionSelected(answer){
   let userAns = answer.textContent;
   let correctAns = questions[que_count].answer;
   let alloptions = option_list.children.length;
   if(userAns == correctAns){
      answer.classList.add("correct");
      console.log("Answer Is Correct");     
   }else{
      answer.classList.add("incorrect")
      console.log("Answer Is Wrong");    
   }
   for(let i=0; i<alloptions; i++) {
      option_list.children[i].classList.add("disabled");
   }
   
}