$(function(){

$("nav ul ul").hide();

$("nav li").hover(
function(){
$("ul:not(:animated)",this).slideDown("fast");
},

function(){
$("ul",this).slideUp("fast");
});

});