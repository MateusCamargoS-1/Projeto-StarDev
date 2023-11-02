const personsCard = document.getElementById('persons')
const starshipsCard = document.getElementById('starships')
const planetsCard = document.getElementById('planet')

const btnPhrase = document.getElementById('btn-phrases')
const phrase = document.getElementById('phrase')

function fillCounters() {
    Promise.all([
        getData('people'),
        getData('starships'),
        getData('planets')
    ])
    .then(data => {
        personsCard.style.fontSize = '5em'
        starshipsCard.style.fontSize = '5em'
        planetsCard.style.fontSize = '5em'
        

        personsCard.innerHTML = data[0].count
        starshipsCard.innerHTML = data[1].count
        planetsCard.innerHTML = data[2].count
    })

    .catch(err => console.error('ERROR: ', err))
}

fillCounters()

function getData(param) {
    return fetch(`https://swapi.dev/api/${param}`).then(res => res.json())
}

// https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote

function loadPhrase() {
    fetch('https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then(res => res.json())
    .then(data => {
        btnPhrase.innerHTML = 'Ver mais uma frase!'
        
        if(!data.content) {
            phrase.innerHTML = `"${data.content}"`
        } else {
            
        }
        

        phrase.animate([
            {transform: 'translateY(-100px)'},
            {transform: 'translateY(0px)'},
        ], {
            duration: 500
        })
    })

    .catch(() => phrase.innerHTML = "Desculpe! Nenhuma frase encontrada.")
}