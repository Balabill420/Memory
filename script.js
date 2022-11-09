const katt = document.querySelector('#kattintások')

document.addEventListener('DOMContentLoaded', () => {

	const cardArray = [
		{
			name:'1',
			img:'images/img-1.png'
		},

		{
			name:'1',
			img:'images/img-1.png'
		},

		{
			name:'2',
			img:'images/img-2.png'
		},

		{
			name:'2',
			img:'images/img-2.png'
		},

		{
			name:'3',
			img:'images/img-3.png'
		},

		{
			name:'3',
			img:'images/img-3.png'
		},

		{
			name:'4',
			img:'images/img-4.png'
		},

		{
			name:'4',
			img:'images/img-4.png'
		},

		{
			name:'5',
			img:'images/img-5.png'
		},

		{
			name:'5',
			img:'images/img-5.png'
		},

		{
			name:'6',
			img:'images/img-6.png'
		},

		{
			name:'6',
			img:'images/img-6.png'
		},

        {
			name:'7',
			img:'images/img-7.png'
		},

		{
			name:'7',
			img:'images/img-7.png'
		},

        {
			name:'8',
			img:'images/img-8.png'
		},

		{
			name:'8',
			img:'images/img-8.png'
		}
	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	var clicks = 0
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []
	var refresh = window.location.reload

	function createBoard () 
	{
		for (let i=0; i < cardArray.length; i++) {
				var card = document.createElement('img');
				card.setAttribute('src', 'images/img-blank.png')
				card.setAttribute('data-id', i)
				card.addEventListener('click', flipCard)
				grid.appendChild(card)
			}
		
	}

	function checkForMatch() {
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if (cardsChosen[0] === cardsChosen[1]) {
	
		if(optionOneId == optionTwoId) {
		  cards[optionOneId].setAttribute('src', 'images/img-blank.png')
		  cards[optionTwoId].setAttribute('src', 'images/img-blank.png')	
		}
		else if (cardsChosen[0] === cardsChosen[1]) {
		  cards[optionOneId].setAttribute('src', cardArray[optionOneId].img)
		  cards[optionTwoId].setAttribute('src', cardArray[optionTwoId].img)
		  cards[optionOneId].removeEventListener('click', flipCard)
		  cards[optionTwoId].removeEventListener('click', flipCard)
		  cardsWon.push(cardsChosen) 
		}
		} else {
		  cards[optionOneId].setAttribute('src', 'images/img-blank.png')
		  cards[optionTwoId].setAttribute('src', 'images/img-blank.png')
		}
		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if  (cardsWon.length === cardArray.length/2) {
		  setTimeout(window.location.reload.bind(window.location), 5000);
		}
	     
	}   

	function flipCard() {
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		clicks++
        katt.textContent = clicks
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500)
		}
	}

	createBoard()
})