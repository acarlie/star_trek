const util = {
    getQuestions: function(num){
        let questionsArr = [];
        for (i = 1; i <= num; i++){
            questionsArr = questionsArr.concat(['#question_' + i]);
        }
        return questionsArr.map(x => $(x).val().trim());
    }
}


$(document).ready(function(){
    $('.ui.dropdown').dropdown();
  
    $("#submit").on("click", function(e){
        event.preventDefault();
        let scores = util.getQuestions(10);

        var newFriend = {
            name: $('#name').val().trim(),
            photo: $('#img').val().trim(),
            scores: scores
        }

        $.post("/api/friends", newFriend)
            .then(function(data) {
                // console.log(data);
            });
    });
  
});
