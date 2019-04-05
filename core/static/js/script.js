let card_questions = ["What is the capital of North Carolina?", "What is my name?", "Where do I learn to code?"]
let card_answers = ["Raleigh", "Christian", "Momentum"]
let flashcard_parent = document.querySelector(".flashcardParent")

let questions = 0;

let flashcard_child = `
    <div class="flashcardChild">
      <p>
        ${card_questions[questions]}
      </p>
      <button class="display_answer_button">

      </button>        
    </div>`;



function card_function(){
  flashcard_parent.insertAdjacentHTML('beforeend', flashcard_child)
  console.log('Hello')
}


card_function()


//Find a way to iterate through questions on clickEvent, on clickEvent remove previous element and add in answer element