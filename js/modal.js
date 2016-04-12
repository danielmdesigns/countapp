$(document).ready(function(){
"use strict";
$(".modal-container").hide();
$(".js-open").on("click", function(event){
  event.preventDefault();
  event.stopPropagation();
  $("#modal").fadeIn();
});

$(this).on("click", function(){
  $("#modal").fadeOut();
});
});