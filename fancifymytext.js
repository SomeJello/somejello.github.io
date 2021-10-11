function changeTextSize() {
	document.getElementById("textArea").style.fontSize = "24pt";
}

function changeTextBold() {
	document.getElementById("textArea").style.fontWeight = "bold";
	document.getElementById("textArea").style.color = "blue";
	document.getElementById("textArea").style.textDecoration = "underline";
}

function changeTextNormal() {
	document.getElementById("textArea").style.fontWeight = "normal";
	document.getElementById("textArea").style.color = "black";
	document.getElementById("textArea").style.textDecoration = "none";
	document.getElementById("textArea").style.fontSize = "10pt";
}

function mooText() {
	var str = document.getElementById("textArea").value
	var parts = str.split(".")
	str = parts.join("-Moo. ");
	document.getElementById("textArea").value = str.toUpperCase();
}