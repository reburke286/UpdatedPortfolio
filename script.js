$(document).ready(function(){
    $("#contact").click(function() {
        $("#modal-contact").addClass("is-active");  
      });
    $("#about").click(function() {
    $("#modal-about").addClass("is-active");  
    });
      
    $(".modal-close").click(function() {
        $(".modal").removeClass("is-active");
    });

});