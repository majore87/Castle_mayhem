// Initialize to variable button and div with this button
var startBtn = document.getElementById('start'),
	startRow = document.getElementById('start-row');

// Remove button when player point the button and add new button with new style
startBtn.addEventListener('mouseenter', function() {
	startBtn.remove();

	startBtn.innerHTML = 'Castle Mayhem';
	startBtn.style.color = 'black';
	startRow.appendChild(startBtn);
})

// When player leaves the button remove old one and replace with default "Play" button
startBtn.addEventListener('mouseleave', function() {
	startBtn.remove();

	startBtn.innerHTML = 'Play';
	startBtn.style.color = 'white';
	startRow.appendChild(startBtn);
})

// Remove jumbotron section and replace it by game section
var jumbotronScn = document.getElementById('jumbotron'),
	gameScn = document.getElementById('game'),
	bodyId = document.getElementsByTagName('body');

// Function for add new section and delete older one depends on gameState with opacity.
function setGameElements(gameState) {
	switch(gameState) {
		case 'started':
			jumbotronScn.style.display = 'none';
			// opacity(jumbotronScn);
			gameScn.style.display = 'block';
			// opacity(gameScn);
		break;
		case 'notStarted':
		default:
			jumbotronScn.style.display = 'block';
			// opacity(jumbotronScn);
			gameScn.style.display = 'none';
			// opacity(gameScn);
	}
}

// Default
setGameElements('notStared');

// Start game if player click on the play button
startBtn.addEventListener('click', function() {
	setGameElements('started');
	computerText(startGame.start);
	playerPressEnter(event);

	if (typeof player !== undefined) {

		if (playerPressEnter.called) {
			console.log(userPromptElement);
		var player = new Player(userPromptElement);
		computerText(player.logMessage());
		}
	}

})











// function for smooth appeard of elements
// function opacity(param) {
// var steps = 0;
// var timer = setInterval(function() {
// 	steps++;
// 	param.style.opacity = 0.05 * steps;
// 	if(steps >= 20) {
// 		clearInterval(timer);
// 		}
// 	}, 50);
// }

