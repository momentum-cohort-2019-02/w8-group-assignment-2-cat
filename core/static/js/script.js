// const pk = document.URL.split('/')[6]
// console.log(pk)
let cardDataUrl = `/core/quiz/8/get_card_data/`

function getQuizCards (cardDataUrl) {
  let promise = fetch(cardDataUrl).then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    console.log('response json')
    return response.json()
  })
  console.log('promise')
  return promise
}

// courtesy https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/ - shuffles deck on refresh
function shuffle (array) {
  var currentIndex = array.length
  var temporaryValue, randomIndex
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

function getCard (cardDataUrl) {
  console.log('getting card')
  getQuizCards(cardDataUrl).then(list => {
      let cardArray = (Object.values(list)[0])
      console.log(cardArray)
    })
}





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
  getCard(cardDataUrl);
});
  


 





//Find a way to iterate through questions on clickEvent, on clickEvent remove previous element and add in answer element