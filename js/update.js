//initialize update area game screen where the all <p> will be added
var updateArea = document.getElementById('update_area');

//initialize value from "form" to variable
var userPromptElement = document.getElementById('userPrompt').value;

// Function for "form"- enter action
function playerPressEnter(event) {
//if enter press then..
if(event.keyCode === 13) {
	//add new paragraph to update area
	var userPromptElement = document.getElementById('userPrompt').value;

	//to reset default form action(reloading website)
	event.preventDefault();

	//reset form to delete text prompted by player
	document.getElementById('myForm').reset();
	computerText(userPromptElement);

	// set the property for the function
	playerPressEnter.called = true;
	}
}


// function for create new paragraphs
function computerText(param) {
	var computerText = document.createElement('p');
	computerText.innerHTML = param;
	updateArea.appendChild(computerText);
}
