// JavaScript Document
//self invoking annoyomus function
//has no name, and runs automaticlly
(function(){
  
  //HELPS FIND MORE ERRORS
  "use strict";
  
  //DEFAULT DISPLAY VALUE IS 0
  var displayValue = "0";
  
  //IF BUTTON IS CLICKED || TOUCHED
  $(".btn").on("click touch", function(){
	//FIND WHICH BUTTON IS CLICKED AND STORE IT IN VARIABLE
    var btnValue = $(this).data("value");
	//IF THE BUTTON CLICKED IS THE EQUALS
    if(btnValue === "="){
	  //REPLACE THE × && ÷ CHARACTERS WITH THE MATH OPERATORS * && /
	  displayValue = displayValue.replace(/×/g , "*");
	  displayValue = displayValue.replace(/÷/g , "/");
	  //THEN CALL THE UPDATE DISPLAY FUNCTION && GIVE IT THE VALUE OF THE EVALUATED ANWSER FUNCTION
	  //OVERWRITE IS TRUE TO REPLACE THE ENTIRE DISPLAY VALUE WITH THE ANWSER
      updateDisplay(processAnswer(), true);
	//OR, IF THE BUTTON PUSHED IS CLEAR
    }else if(btnValue === "clear"){
	  //UPDATE DISPLAY TO ZERO && OVER RIDE SCREEN (MAKING OVERWRITE TRUE)
      updateDisplay("0", true);
    //OTHERWISE CHECK TO SEE IF THERE ARE OPERATORS SIDE BY SIDE
	}else{
	  //IF A OPERATOR IS SELECTED
      if(btnValue === "+" || btnValue === "-" || btnValue === "×" || btnValue === "÷"){
	   //FIND THE LAST INDEX POSITION && GRAB ITS VALUE IN THE DISPLAY
       if((displayValue[displayValue.length-1] === "+") ||
         (displayValue[displayValue.length-1] === "-") ||
         (displayValue[displayValue.length-1] === "×") ||
         (displayValue[displayValue.length-1] === "÷")){
	    //SO THAT IF A NEW OPERATOR IS SELECTED
		//IT WILL REPLACE THE PREV OPERATOR WITH THE NEW OPERATOR && UPDATE IN THE DISPLAY
        displayValue = displayValue.substr(0, displayValue.length-1);
       }
      }
	  //FINALLY, UPDATE DISPLAY WITH WHATEVER BUTTON VALUE IS CLICKED
	  //THEN, DO WE WANT TO OVER RIDE THE OPERATOR OR APPEND ANOTHER NUMBER (TRUE ? FALSE)
      updateDisplay(btnValue, false);
    }
  });
  
//EQUAL & CLEAR KEYPAD VALUES
$(document).keydown(function(event){
  var displayValue = "0";
  var keycode = event.which;
  if ( (keycode >= 48 && keycode <= 57) || (keycode >= 96 && keycode <= 111) || (keycode >= 187 && keycode <= 191) || (keycode === 13) || (keycode === 8)){
  if(keycode === 13){
	  displayValue = displayValue.replace(/×/g , "*");
	  displayValue = displayValue.replace(/÷/g , "/");
	  updateDisplay(processAnswer(), true);
  }else if(keycode === 48){
	  updateDisplay("0", false);
  }else if(keycode === 49){
	  updateDisplay("1", false);
  }else if(keycode === 50){
  	updateDisplay("2", false);
  }else if(keycode === 51){
  	updateDisplay("3", false);
  }else if(keycode === 52){
  	updateDisplay("4", false);
  }else if(keycode === 53){
  	updateDisplay("5", false);
  }else if(keycode === 54){
  	updateDisplay("6", false);
  }else if(keycode === 55){
  	updateDisplay("7", false);
  }else if(keycode === 56){
  	updateDisplay("8", false);
  }else if(keycode === 57){
  	updateDisplay("9", false);
  }else if(keycode === 8){
	  updateDisplay("0", true);
  }else if(keycode === 106){
  	updateDisplay("×", false);
  }else if(keycode === 107){
  	updateDisplay("+", false);
  }else if(keycode === 108){
  	updateDisplay(".", false);
  }else if(keycode === 109){
  	updateDisplay("-", false);
  }else if(keycode === 111){
  	updateDisplay("÷", false);
  }else if(keycode === 189){
	updateDisplay("-");
  }else if(keycode === 190){
  	updateDisplay(".", false);
  }else if(keycode === 191){
  	updateDisplay("/", false);
  }
  else{
	  updateDisplay(keycode, false);
  }
  }
});

//TAKES EVERYTHING IN DISPLAY AND RETURNS THE RESULT
var processAnswer = function(){
  //IF EVERYTHING WORKS CORRECTLY, EVALUATE (a + b)
  try{
	//EVAL CALCULATES THE DISPLAY VALUE (a + b)
	//THEN STORES IT IN THE RESULT VARIABLE (result = c)
	var result = eval(displayValue);
	//RETURN THE EVAULATED RESULT (return c)
	return result;
  //OTHERWISE THERE IS AN ERROR SO RETURN ERROR MESSAGE
  }catch(error){
	return "Error";
  }
};

//TAKES MY BUTTON VALUE AND SHOWS IT IN DISPLAY
//OVERWRITE CHECKS TO SEE IF WE SHOULD OVERWRITE THE CURRENT DISPLAY VALUE OR ADD TO IT
var updateDisplay = function(value, overwrite){
  //MAKE SURE THAT MY DISPLAY VALUE IS ALWAYS A STRING (SO NUMBERS DONT ADD TOGETHER)
  displayValue = displayValue.toString();
  //IF OVERWITE IS TRUE, OVER RIDE THE DISPLAY VALUE
  if(overwrite === true){
	//UPDATE DISPLAY w/ WHATEVER BUTTON VALUE IS CLICKED
	displayValue = value;
  }else{
	//IF THE FIRST VALUE IS A 0, +, *, /, Error, or Infinity
	if(displayValue === "0" || displayValue === "+" || displayValue === "×" || displayValue === "÷" || displayValue === "Error" || displayValue === "Infinity"){
	  //OVER RIDE IT WITH AN ACTUAL NUMBER THAT WAS CLICKED
	  displayValue = value;
	//IF OVERWRITE IS FALSE
	}else{
	  //KEEP APPENDING A NUMBER TO THE CURRENT DISPLAY VALUE
	  displayValue += value;
	}
  }
  //CHECK DISPLAY LENGTH
  if(displayValue.length >= 10 && displayValue.length <= 16){
	  $(".display").css("font-size", "2em");
  }else if(displayValue.length >= 16 && displayValue.length <= 30){
	  $(".display").css("font-size", "1em");
  }else if(displayValue.length >= 30){
	  $(".btn").addClass("disable");
  }else if(displayValue.length <= 10){
	  $(".display").css("font-size", "3.5em");
  }else{
  $(".display").css("font-size", "3.5em");
}
  //REPLACE DISPLAY
  $(".display").text(displayValue);
};

})();

//MODAL POPUP
$(".modal-container").hide();
$(".open-modal").on("click", function(event){
  "use strict";
  event.preventDefault();
  event.stopPropagation();
  $("#modal").fadeIn();
});

$(this).on("click", function(){
  "use strict";
  $("#modal").fadeOut();
});