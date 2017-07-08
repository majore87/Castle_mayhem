// Function for "form"- enter action
function handle(event) {

//if enter press then..
if(event.keyCode === 13) {
	var updateArea = document.getElementById('update_area');
	//initialize value from "form" to variable
	var userPromptElement = document.getElementById('userPrompt').value;

	//add new paragraph to update area
	var newText = document.createElement('p');
	newText.innerHTML = userPromptElement;
	updateArea.appendChild(newText);

	//to reset default form action(reloading website)
	event.preventDefault();

	//reset form to delete text prompted by player
	document.getElementById('myForm').reset();
	}
}
