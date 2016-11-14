//test
alert("index.js is in use, so this is working...");

//self invoking annoyomus function
//has no name, and runs automaticlly
(function(){
  
//helps find more errors, easily
"use strict";

var displayValue = "0";

//CLICK && TOUCH
$(".btn").on("touchstart click", function(event){
  event.stopPropagation();
  event.preventDefault();
  if(event.handled !== true) {
	var btnValue = $(this).data("value");
	if(btnValue === "="){
	  displayValue = displayValue.replace(/×/g , "*");
	  displayValue = displayValue.replace(/÷/g , "/");
	  updateDisplay(processAnswer(), true);
	}else if(btnValue === "clear"){
	  updateDisplay("0", true);
	}else{
	  if(btnValue === "+" ||
		 btnValue === "-" ||
		 btnValue === "×" ||
		 btnValue === "÷"){
	   if((displayValue[displayValue.length-1] === "+") ||
		 (displayValue[displayValue.length-1] === "-") ||
		 (displayValue[displayValue.length-1] === "×") ||
		 (displayValue[displayValue.length-1] === "÷")){
		displayValue = displayValue.substr(0, displayValue.length-1);
	   }
	  }
	  updateDisplay(btnValue, false);
	}
  event.handled = true;
  }else{
	return false;
  }
});

//KEYPAD
$(document).keydown(function(event) {
  var keycode = event.which || event.charCode || event.keyCode;
  //BETWEEN 48 - 57
  //BETWEEN 96 - 111
  //13, 8
  if ((keycode >= 48 && keycode <= 57) || (keycode >= 96 && keycode <= 111) || (keycode >= 187 && keycode <= 191) || (keycode >= 12 && keycode <= 13) || keycode === 8 || keycode === 46) {
    if(keycode === 13 || keycode === 187){
      displayValue = displayValue.replace(/×/g, "*");
      displayValue = displayValue.replace(/÷/g, "/");
      updateDisplay(processAnswer(), true);
    }else if(keycode === 48 || keycode === 96){
      updateDisplay("0", false);
    }else if(keycode === 49 || keycode === 97){
      updateDisplay("1", false);
    }else if(keycode === 50 || keycode === 98){
      updateDisplay("2", false);
    }else if(keycode === 51 || keycode === 99){
      updateDisplay("3", false);
    }else if(keycode === 52 || keycode === 100){
      updateDisplay("4", false);
    }else if(keycode === 53 || keycode === 101){
      updateDisplay("5", false);
    }else if(keycode === 54 || keycode === 102){
      updateDisplay("6", false);
    }else if(keycode === 55 || keycode === 103){
      updateDisplay("7", false);
    }else if(keycode === 56 || keycode === 104){
      updateDisplay("8", false);
    }else if(keycode === 57 || keycode === 105){
      updateDisplay("9", false);
    }else if(keycode === 8 || keycode === 12 || keycode === 46){
      updateDisplay("0", true);
    }else if(keycode === 106){
      updateDisplay("×", false);
    }else if(keycode === 107){
      updateDisplay("+", false);
    }else if(keycode === 108 || keycode === 110 || keycode === 190){
      updateDisplay(".", false);
    }else if(keycode === 109){
      updateDisplay("-", false);
    }else if(keycode === 111){
      updateDisplay("÷", false);
    }else if(keycode === 189){
      updateDisplay("-");
    }else if(keycode === 191){
      updateDisplay("/", false);
    }else{
      updateDisplay(keycode, false);
    }
  }
});

//EVALUATE
var processAnswer = function(){
  try{
	var result = eval(displayValue);
	return result;
  }catch(e){
	return "Error";
	}
};
	

//var processAnswer = new Function("displayValue", "return displayValue");
	

//UPDATE DISPLAY
var updateDisplay = function(value, overwrite){

  displayValue = displayValue.toString();
  
  if(overwrite === true){
	displayValue = value;
  }else{
	if(displayValue === "0" || displayValue === "+" || displayValue === "×" || displayValue === "÷" || displayValue === "Error" || displayValue === "Infinity"){
	  displayValue = value;
	}else{
	  displayValue += value;
	}
  }
  //CHECK DISPLAY LENGTH
  if(displayValue.length >= 12 && displayValue.length <= 20){
	  $(".display").css("font-size", "2em");
  }else if(displayValue.length >= 21 && displayValue.length <= 30){
	  $(".display").css("font-size", "1em");
  }else if(displayValue.length >= 31){
	  $(".btn").addClass("disable");
  }else{
  	   $(".display").css("font-size", "3.5em");
}
  //UPDATE DISPLAY BASED ON LENGTH
  $(".display").text(displayValue);
};

})();



//MODAL POPUP
$(".modal-container").hide();
$(".menu-icon").on("click touchstart", function(event){
  "use strict";
  event.preventDefault();
  event.stopPropagation();
  $("#modal").fadeIn();
});

$(".close").on("click", function(){
  "use strict";
  $("#modal").fadeOut();
});

$("#js-close").on("click", function(){
  "use strict";
  $("#modal").fadeOut();
});