// JavaScript Document
//self invoking annoyomus function
//has no name, and runs automaticlly
(function(){
  
  //helps find more errors, easily
  "use strict";
  
  var displayValue = "0";
  
  $(".btn").on("click", function(){
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
	/*CHECK LENGTH OF BUTTONS*/
	if(displayValue.length >= 10 && displayValue.length <= 16){
		$(".display").css("font-size", "2em");
  	}else if(displayValue.length >= 16 && displayValue.length <= 30){
		$(".display").css("font-size", "1em");
	}else if(displayValue.length >= 30){
		$(".btn").addClass("disable");
	}else{
		$(".display").css("font-size", "3em");
	}
	/*INSERT*/
    $(".display").text(displayValue);
  };
  
  
  
})();