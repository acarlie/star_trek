const util = {
    getVal: (id) => $('#' + id).val().trim(),

}

$(document).ready(function(){
    $('.ui.dropdown').dropdown();

    // $("#add-btn").on("click", function(event) {
    //     event.preventDefault();
    //     var newCharacter = {
    //       name: $("#name").val().trim(),
    //       role: $("#role").val().trim(),
    //       age: $("#age").val().trim(),
    //       forcePoints: $("#force-points").val().trim()
    //     };
  
    //     // Question: What does this code do??
    //     $.post("/api/characters", newCharacter)
    //       .then(function(data) {
    //         console.log("add.html", data);
    //         alert("Adding character...");
    //       });
    //   });

    $("#submit").on("click", function(e){
        event.preventDefault();
        console.log(util.getVal("name"));
    });
  
});
