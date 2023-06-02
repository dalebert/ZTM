const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.addEventListener('click', toggleDone);
	li.appendChild(createButton());
}

function createButton() {
	var myButton = document.createElement('button');
	myButton.innerHTML = 'delete';
	myButton.addEventListener("click", delTask);
	return myButton;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liModify(element) {
	element.addEventListener('click', toggleDone);
	element.appendChild(createButton());
}

function toggleDone() {
	this.classList.toggle('done');
}

function delTask() {
	this.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.querySelectorAll('li').forEach(liModify);
