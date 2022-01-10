var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = ul.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var delButton = document.createElement("button");
	delButton.innerHTML = "Del";

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(delButton);

	ul.appendChild(li);
	input.value = "";

	toggleComplete();
	listButton();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterEnter(event) {
	if (inputLength() > 0 &&
		event.keyCode === 13) {
		createListElement();
	}
}

function toggleComplete() {
	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener('click', toggleDone);
	}
}

function toggleDone() {
	this.classList.toggle('done');
}

function listButton() {
	var button = document.querySelectorAll("li button");
	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener("click", deleteElement);
	}
}

function deleteElement() {
	for (var i = 0; i < list.length; i++) {
		this.parentNode.remove();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

toggleComplete();

listButton();