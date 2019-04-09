document.addEventListener("DOMContentLoaded", function() {
  //Currently used until Json is properly imported.
  let dummyData = {
    "What is the capital of North Carolina?": "Raleigh",
    "Who is the lead instructor of Momentum?": "Clinton",
    "What does HTML stand for?": "Hyper-text Markup Language",
    "Who was Django named after?": "Django Reinhardt",
  };

  let dummyKey = 0;
  // let dummyValue = 0;

  var answer_button = document.querySelector(".startTheGame");
  let flashcard_parent = document.querySelector(".flashcardParent");

  
  let flashcard_child = 
 //Creates the front of the card, this will iterate through all available questions.

  `<div class="flashcardChild">
    <p>
      ${Object.keys(dummyData)[dummyKey]}
    </p>
    <button class="display_answer_button">
      Next
    </button>        
  </div>`;

  
  function game_starter(){
    //Contains the functionality for displaying the contents of the front string literal. 
    //Calls queryAssigner to assign querySelectors to created items.

    answer_button.addEventListener("click", function(){  flashcard_parent.insertAdjacentHTML('beforeend', flashcard_child);
    console.log('Hello');
    queryAssigner(answer_button, flashcard_parent)});
    console.log("Is this running?");
  };



  // function card_function(answer_button, flashcard_parent, flashcard_child){
  //   flashcard_parent.insertAdjacentHTML('beforeend', flashcard_child)
  //   console.log('Hello')
  //   queryAssigner(answer_button, flashcard_parent)
  // };
  


  function queryAssigner(answer_button, flashcard_parent){
    //Attaches proper querySelectors to objects created by the string literal.

    console.log("Goodbye")
    answer_button = document.querySelector(".display_answer_button")
    answer_button.addEventListener("click", game_starter(flashcard_parent, flashcard_child))
  };

game_starter();
});
  


 





//Find a way to iterate through questions on clickEvent, on clickEvent remove previous element and add in answer element