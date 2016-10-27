$(function(){

   // jQuery methods go here...

   $(".buttonUp").click(function(){
  // Holds the product ID of the clicked element
  var value = parseInt($(this).parents(".colVie").find(".lifeBar").html());
  console.log(value);
  value = value + 1 ;
  $(this).parents(".colVie").find(".lifeBar").html(value);
  });

  $(".buttonDown").click(function(){
 // Holds the product ID of the clicked element
 var value = parseInt($(this).parents(".colVie").find(".lifeBar").html());
 console.log(value);
 value = value - 1 ;
 $(this).parents(".colVie").find(".lifeBar").html(value);
 });

 $(".buttonUpE").click(function(){
// Holds the product ID of the clicked element
var value = parseInt($(this).parents(".colEnergy").find(".EnergyBar").html());
console.log(value);
value = value + 1 ;
$(this).parents(".colEnergy").find(".EnergyBar").html(value);
});

$(".buttonDownE").click(function(){
// Holds the product ID of the clicked element
var value = parseInt($(this).parents(".colEnergy").find(".EnergyBar").html());
console.log(value);
value = value - 1 ;
$(this).parents(".colEnergy").find(".EnergyBar").html(value);
});


});
