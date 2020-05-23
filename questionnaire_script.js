function load() {
	document.getElementById("question").innerHTML = questions[0]; 
	document.getElementById("endText").style.display = "none";
	for (var i = 1; i <= 4; i ++) {
		var thisid = "text" + i; 
		document.getElementById(thisid).innerHTML = options[0][i - 1]; 
	}
}
function select(i) {
	if (document.getElementById("button").innerHTML == "Check") {
		curr = i; 
		var optId = "o" + i; 
		for (var j = 1; j <= 4; j ++) {
			id = "o" + j;
			if (id == optId) {
				var thisid = id + ""; 
				document.getElementById(thisid).classList.remove("unselected"); 
				document.getElementById(thisid).classList.add("selected"); 
			}
			else {
				var thisid = id + ""; 
				document.getElementById(thisid).classList.remove("selected"); 
				document.getElementById(thisid).classList.add("unselected"); 
			}
		}
	}
}
function check() {
	if (document.getElementById("button").innerHTML == "Check") {
		if (curr == 0) 
			alert("You have not selected an option!"); 
		else {
			document.getElementById("button").innerHTML = "Next"; 
			if (curr == ansNums[qnum - 1]) {
				document.getElementById("c" + qnum).style.backgroundColor = "green"; 
				document.getElementById("ansMsg").style.color = "green"; 
				document.getElementById("ansMsg").style.fontSize = "25"; 
				document.getElementById("ansMsg").innerHTML = correctMsgs[Math.floor(Math.random() * 4)]; 
				correct ++; 
			}	
			else {
				document.getElementById("o" + curr).classList.remove("selected"); 
				document.getElementById("o" + curr).classList.add("wrong"); 
				document.getElementById("o" + ansNums[qnum - 1]).classList.remove("unselected"); 
				document.getElementById("o" + ansNums[qnum - 1]).classList.add("selected"); 
				document.getElementById("c" + qnum).style.backgroundColor = "red"; 
				document.getElementById("ansMsg").style.color = "red"; 
				document.getElementById("ansMsg").style.fontSize = "15"; 
				document.getElementById("ansMsg").innerHTML = explanations[qnum - 1]; 
			}
		}
	}
	else {
		if (qnum == 8) {
			document.getElementById("innerText").style.display = "none";
			document.getElementById("numRight").innerHTML = correct; 
			if (correct < 6) 
				document.getElementById("message").innerHTML = "Good try!"; 
			else
				document.getElementById("message").innerHTML = "Well done!"; 
			document.getElementById("endText").style.display = "block";
		}
		else { 
			document.getElementById("ansMsg").innerHTML = ""; 
			curr = 0; 
			qnum ++; 
			for (var i = 1; i <= 4; i ++) {
				var thisid = "o" + i, thisop = "text" + i; 
				document.getElementById(thisid).classList.remove("selected"); 
				document.getElementById(thisid).classList.remove("wrong"); 
				document.getElementById(thisid).classList.add("unselected"); 
				document.getElementById(thisop).innerHTML = options[qnum - 1][i - 1]; 
			}
			document.getElementById("question").innerHTML = questions[qnum - 1]; 
			document.getElementById("qNum").innerHTML = qnum; 
			document.getElementById("button").innerHTML = "Check"
		}
	}
}