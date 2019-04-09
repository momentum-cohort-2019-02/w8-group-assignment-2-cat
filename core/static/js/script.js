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
  var answer_right = null;
  var answer_wrong = null;

  let flashcard_front_child = 
 //Creates the front of the card, this will iterate through all available questions.

  `<div class="flashcardChild">
    <p>
      ${Object.keys(dummyData)[dummyKey]}
    </p>
    <button class="display_answer_button">
      Next
    </button>        
  </div>`;

  let flashcard_back_child =
  //Creates the back of the card, this will iterate through all available answers.

  `<div class="flashcardChild">
    <p>
      ${Object.values(dummyData)[dummyKey]}
    </p>
    <button class="answer_right">
      Correct
    </button> 
    <button class="answer_wrong">
      Incorrect
    </button>           
  </div>`;

  
  function display_question(){
    //Contains the functionality for displaying the contents of the front string literal. 
    //Calls queryAssigner to assign querySelectors to created items.

    answer_button.addEventListener("click", flashcard_parent.insertAdjacentHTML('beforeend', flashcard_front_child));
    queryQuestionAssigner(answer_button, flashcard_parent);
    console.log("Is this running?");
  };

  function display_answer(){
    //Contains the same information as the display_question function, but for the answer side of the card.
    //queryAssigner for this function will also assign eventListeners to the right/wrong answer buttons.
    
    answer_button.addEventListener("click", flashcard_parent.insertAdjacentHTML('beforeend', flashcard_back_child));

  }

  // function card_function(answer_button, flashcard_parent, flashcard_child){
  //   flashcard_parent.insertAdjacentHTML('beforeend', flashcard_child)
  //   console.log('Hello')
  //   queryAssigner(answer_button, flashcard_parent)
  // };
  


  function queryQuestionAssigner(answer_button, flashcard_parent){
    //Attaches proper querySelectors to objects created by the string literal.

    console.log("Goodbye")
    answer_button = document.querySelector(".display_answer_button")
    answer_button.addEventListener("click", display_question(flashcard_parent, flashcard_front_child))
  };

  function queryAnswerAssigner(){
    //This assigns event listeners to the answer_right/answer_wrong buttons.
    //When the buttons are clicked, it displays the next question.

    console.log("This assigns the answer");
    answer_right = document.querySelector(".answer_right");
    answer_wrong = document.querySelector(".answer_wrong");
    answer_right = addEventListener("click", display_question(flashcard_parent, flashcard_front_child));
    answer_wrong = addEventListener("click", display_question(flashcard_parent, flashcard_front_child))
  }

display_question();
});
  


 





//Find a way to iterate through questions on clickEvent, on clickEvent remove previous element and add in answer element