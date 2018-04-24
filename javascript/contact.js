var messageData = {name: "", email:"", Arrival:"", Room:"", Departure:""};

window.onload = function() {
  enableFormSubmit();
}

function enableFormSubmit(){
	hideElementById("thankYouContent");
	var form = document.getElementsByTagName("form")[0];
	form.onsubmit = function(event){
		event.preventDefault();
		handleFormSubmit();
		return false;
	}
}

function hideElementById(elementId){
	var element = document.getElementById(elementId);
	if (isVisible(element)){
		element.style.display = "none";
	}
}

function showElementById(elementId){
	var element = document.getElementById(elementId);
	if (!isVisible(element)){
		element.style.display = "block";
	}
}

function isVisible(element){
	return (element.style.display != "none");
}

function handleFormSubmit(){
	hideElementById("mainContent");
	displayThankYouMessage();
}

function displayThankYouMessage(){
	writeThankYouMessage();
	showElementById("thankYouContent")
}

function writeThankYouMessage(){
	getFormData();
	var name = document.getElementById("senderName");
	var Arrival = document.getElementById("senderArrival");
	var Departure = document.getElementById("senderDeparture");
	var Room = document.getElementById("senderRoom");
	name.innerHTML = messageData.name;
	Arrival.innerHTML = messageData.Arrival;
	Departure.innerHTML = messageData.Departure;
	Room.innerHTML = messageData.Room;
}

function getFormData(){
	messageData.name = getFormElementDataById("name");
	messageData.email = getFormElementDataById("email");
	messageData.Arrival = getFormElementDataById("Arrival");
	messageData.Room = getFormElementDataById("Room");
	messageData.Departure = getFormElementDataById("Departure");
}

function getFormElementDataById(elementId){
	var value;
	var element = document.getElementById(elementId);
	switch(element.nodeName.toLowerCase()){
		case "input":
		case "textarea":
		case "email":
			value= element.value;
			break;
		case "select":
			value = element.options[element.selectedIndex].text;
			break;
	}
	return value;
}

