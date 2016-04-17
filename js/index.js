// JavaScript Document
//self invoking annoyomus function
//has no name, and runs automaticlly
(function(){
  
  //helps find more errors, easily
  "use strict";
  
  var displayValue = "0";
  
  $(".btn").on("click touch", function(){
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
  });
  
$(document).keydown(function(event) {
  var displayValue = "0";
  var keycode = event.which;
  if ((keycode >= 48 && keycode <= 57) || (keycode >= 96 && keycode <= 111) || (keycode >= 187 && keycode <= 191) || (keycode === 13) || (keycode === 8)) {
    if(keycode === 13){
      displayValue = displayValue.replace(/÷/g, "/");
      displayValue = displayValue.replace(/÷/g, "/");
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
    }else{
      updateDisplay(keycode, false);
    }
  }
});

  var processAnswer = function(){
    try{
      var result = eval(displayValue);
      return result;
    }catch(e){
      return "Error";
      }
  };
  
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

$(".close").on("click", function(){
  "use strict";
  $("#modal").fadeOut();
});