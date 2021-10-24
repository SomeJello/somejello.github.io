/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

	// Reser fields on page load
	resetFields();
	
	// Encrypt button event handler
	const btEncrypt  = document.getElementById("encrypt-it");
    if (btEncrypt) {
	  btEncrypt.addEventListener("click", encryptText);  
    }
	
	// Reset button event handler
	const btReset = document.getElementById("reset");
	if (btReset) {
		btReset.addEventListener("click", resetFields);
	}
	
  }

	// Add any other functions in this area (you should not implement your
	// entire program in the init function, for similar reasons that
	// you shouldn't write an entire Java program in the main method).
  
	function encryptText() {
		var initialText = document.getElementById("input-text").value;
		if (document.getElementById("cipher-type").value == "shift") {
			var result = shiftCipher(initialText);
		}
		else if (document.getElementById("cipher-type").value == "random") {
			var result = randomCipher(initialText);
		}
		document.getElementById("result").innerHTML = result;
		
		if (document.getElementById("all-caps").checked) {
			document.getElementById("result").innerHTML = result.toUpperCase();
		}

		if (document.getElementById("24ptFont").checked) {
			document.getElementById("result").style.fontSize = "24pt";
		}

		if (document.getElementById("12ptFont").checked) {
			document.getElementById("result").style.fontSize = "12pt";
		}
	}
	
	function resetFields() {
		
		// Reset input text
		var inputText = document.getElementById("input-text");
		inputText.value = "";
		inputText.placeholder = "Enter your message to encrypted here";
		
		// Reset cipher type
		document.getElementById("cipher-type").value = "shift";

		// Reset font size
		document.getElementById("12ptFont").checked = true;
		document.getElementById("24ptFont").checked = false;

		// Uncheck all-caps
		document.getElementById("all-caps").checked = false;
		
		//Reset result text
		document.getElementById("result").innerHTML = "";
	}
  
  
	// Returns an encrypted version of the given text, where
	// each letter is shifted alphabetically ahead by 1 letter,
	// and 'z' is shifted to 'a' (creating an alphabetical cycle).
 
	function shiftCipher(text) {
		text = text.toLowerCase();
		let result = "";
		for (let i = 0; i < text.length; i++) {
			if (text[i] < 'a' || text[i] > 'z') {
				result += text[i];
			}
			
			else if (text[i] == 'z') {
				result += 'a';
			}
			
			else { // letter is between 'a' and 'y'
				let letter = text.charCodeAt(i);
				let resultLetter = String.fromCharCode(letter + 1);
				result += resultLetter;
			}
		}
		return result;
	}

	function randomCipher(text) {
		text = text.toLowerCase();
		let result = "";
		for (let i = 0; i < text.length; i++) {
			if (text[i] < 'a' || text[i] > 'z') {
				result += text[i];
			}
			else if (text[i] == 'z') {
				result += 'a';
			}
			else {
				let letter = text.charCodeAt(i);
				let resultLetter = String.fromCharCode(letter + Math.floor(Math.random() * 5));
				result += resultLetter;
			}
		}
		return result;
	}

})();
