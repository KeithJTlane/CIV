window.onload = function() {
  enableQualificationExpansion();
}

function enableQualificationExpansion(){
	hideAllanswers();
	var question = document.getElementsByClassName("question");
	for (var i = 0; i < question.length; i++) {
		question[i].onclick = function(){
			var answers = this.nextElementSibling;
			if (isVisible(answers)) {
				answers.style.display = "none";
				this.classList.add("ellipsis");
			} else {
				answers.style.display = "block";
				this.classList.remove("ellipsis");
			}
		}
	}
}

function hideAllanswers(){
	var question = document.getElementsByClassName("question");
	for(var i = 0; i < question.length; i++){
		var answers = question[i].nextElementSibling;
		if (isVisible(answers)){
			question[i].classList.add("ellipsis");
			answers.style.display = "none";
		}
    }
}

function isVisible(element){
	var result=false;
	if(element.style.display != "none"){
		result=true;
	}
	return result;
}

