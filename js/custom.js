$(document).ready(function(){
$(".divs div").each(function(e) 
{if (e != 0)
$(this).hide();
});
    
$("#previousButton").click(function(){
if ($(".divs div:visible").next().length != 0)
$(".divs div:visible").next().fadeIn().prev().hide();
else {
$(".divs div:visible").hide();
$(".divs div:first").fadeIn();}
return false;
});

$("#nextButton").click(function(){
if ($(".divs div:visible").prev().length != 0)
$(".divs div:visible").prev().fadeIn().next().hide();
else {
$(".divs div:visible").hide();
$(".divs div:last").fadeIn();}
return false;
});
  
$("#Button1").click(function(){
$(".Content1").fadeIn();
$(".Content2").hide();
$(".Content3").hide();
$(".Content4").hide();
$(".Content5").hide();       
});
    
$("#Button2").click(function(){
$(".Content1").hide();
$(".Content2").fadeIn();
$(".Content3").hide();
$(".Content4").hide();
$(".Content5").hide();
});
    
$("#Button3").click(function(){
$(".Content1").hide();
$(".Content2").hide();
$(".Content3").fadeIn();
$(".Content4").hide();
$(".Content5").hide();
});
    
$("#Button4").click(function(){
$(".Content1").hide();
$(".Content2").hide();
$(".Content3").hide();
$(".Content4").fadeIn();
$(".Content5").hide();
});
    
$("#Button5").click(function(){
$(".Content1").hide();
$(".Content2").hide();
$(".Content3").hide();
$(".Content4").hide();
$(".Content5").fadeIn();
});

});