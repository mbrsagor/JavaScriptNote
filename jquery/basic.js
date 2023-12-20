$("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    },
    click: function(){
      $(this).css("background-color", "yellow");
    }
});
  
// show hide
$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
});