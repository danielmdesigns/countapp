



// JavaScript Document
//self invoking annoyomus function
//has no name, and runs automaticlly
(function(){
  
  //helps find more errors, easily
  "use strict";
  
  var displayValue = "0";
  
  $(".btn").on("click touch", function(){
	//STORE VALUE OF WHICH EVER BUTTON IS CLICKED
    var btnValue = $(this).data("value");
    if(btnValue === "="){
	  displayValue = displayValue.replace(/×/g , "*");
	  displayValue = displayValue.replace(/÷/g , "/");
      updateDisplay(processAnswer(), true);
	//IF CLEAR BUTTON IS PUSHED
    }else if(btnValue === "clear"){
	  //UPDATE DISPLAY TO ZERO & OVER RIDE SCREEN (MAKING OVERWRITE TRUE)
      updateDisplay("0", true);
    }else{
      if(btnValue === "+" || btnValue === "-" || btnValue === "×" || btnValue === "÷"){
	   //IF THE LAST INDEX VALUE IN THE DISPLAY IS AN OPPERATOR
       if((displayValue[displayValue.length-1] === "+") ||
         (displayValue[displayValue.length-1] === "-") ||
         (displayValue[displayValue.length-1] === "×") ||
         (displayValue[displayValue.length-1] === "÷")){
	    //REPLACE THE OPERATOR w/ THE NEW OPPERATOR & SAVE IT INTO DISPLAY
        displayValue = displayValue.substr(0, displayValue.length-1);
       }
      }
	  //UPDATE DISPLAY WITH WHATEVER BUTTON VALUE IS SELECTED
	  //THEN, DO WE WANT TO OVER RIDE THE OPERATOR OR APPEND ANOTHER NUMBER (TRUE ? FALSE)
      updateDisplay(btnValue, false);
    }
  });
  
//EQUAL & CLEAR KEYPAD VALUES
$(document).keydown(function(event){
  var displayValue = "0";
  var keycode = event.which;
  if(keycode === 13){
	  displayValue = displayValue.replace(/×/g , "*");
	  displayValue = displayValue.replace(/÷/g , "/");
	  updateDisplay(processAnswer(), true);
  }else if(keycode === 8){
	  updateDisplay("0", true);
  }else{
	  updateDisplay(keycode, false);
  }
});

  //TAKES EVERYTHING IN DISPLAY AND RETURNS RESULT
  var processAnswer = function(){
    try{
      var result = eval(displayValue);
      return result;
    }catch(e){
      return "Error";
      }
  };
  

//TAKES MY BUTTON VALUE AND SHOWS IT IN DISPLAY
//OVERWRITE CHECKS TO SEE IF WE SHOULD OVERWRITE THE CURRENT DISPLAY VALUE OR ADD TO IT
var updateDisplay = function(value, overwrite){
  //MAKE SURE THAT MY DISPLAY VALUE IS ALWAYS A STRING
  displayValue = displayValue.toString();
  //IF OVERWITE IS TRUE, OVER RIDE THE DISPLAY VALUE
  if(overwrite === true){
	//UPDATE DISPLAY w/ WHATEVER BUTTON VALUE IS CLICKED
	displayValue = value;
  }else{
	//IF THE CURRENT DISPLAY VALUE IS A 0, +, -, *, /, error, or infinity
	if(displayValue === "0" || displayValue === "+" || displayValue === "×" || displayValue === "÷" || displayValue === "Error" || displayValue === "Infinity"){
	  //OVER RIDE IT WITH THE NUMERIC DISPLAY VALUE THAT WAS CLICKED
	  displayValue = value;
	//IF OVERWRITE IS FALSE
	}else{
	  //KEEP APPENDING A NUMBER TO THE CURRENT DISPLAY VALUE
	  displayValue += value;
	}
  }
	
	/*CHECK DISPLAY LENGTH*/
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
	/*INSERT*/
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