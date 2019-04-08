document.addEventListener("DOMContentLoaded", function() {
  let dummyData = {
    "What is the capital of North Carolina?": "Raleigh",
    "Who is the lead instructor of Momentum?": "Clinton",
    "What does HTML stand for?": "Hyper-text Markup Language",
    "Who was Django named after?": "Django Reinhardt",
  };
  let dummyKey = 0;
  // let dummyValue = 0;
  
  
  
  let flashcard_child = `
      <div class="flashcardChild">
        <p>
          ${Object.keys(dummyData)[dummyKey]}
        </p>
        <button class="display_answer_button">
  
        </button>        
      </div>`;


  let flashcard_parent = document.getElementsByClassName("flashcardParent");
  let answer_button = document.getElementsByClassName("display_answer_button");
  let start_game = document.querySelector(".startTheGame");

  function card_function(flashcard_parent, flashcard_child){
    flashcard_parent.insertAdjacentHTML('beforeend', flashcard_child)
    console.log('Hello')
  };

console.log(start_game)

start_game.addEventListener("click", function() {card_function(flashcard_parent, flashcard_child)});
  
function answer_button_function(){answer_button.addEventListener("click", card_function(flashcard_parent, flashcard_child))};

  



});
  
 





//Find a way to iterate through questions on clickEvent, on clickEvent remove previous element and add in answer element