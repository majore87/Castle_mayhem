// Initialize to variable button and div with this button
var startBtn = document.getElementById('start');
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