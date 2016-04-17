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