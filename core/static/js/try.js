const dataUrl = `/quiz/${pk}/get_card_data/`


function query (selector) {
    return document.querySelector(selector)
}
  
function queryAll (selector) {
    return document.querySelectorAll(selector)
}

function getDeckCards (dataUrl) {
    let promise = fetch(dataUrl).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    console.log('got to promise')
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

function getInfo (dataUrl) {
    getDeckCards(dataUrl)
    console.log(dataUrl)
}

document.addEventListener('DOMContentLoaded', function () {
    getDeckCards(dataUrl)
    getInfo(dataUrl)
})