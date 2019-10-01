$(document).ready(function () {

    // initialization of Semantic UI dropdowns
    $('.ui.dropdown').dropdown();

    // generating question ids and creating question rules
    let questions = UTILS.getIDs('.survey-question');
    let fieldsObj = UTILS.setFields(questions, UTILS.fields);

    // Semantic UI's form handling
    $('.ui.form').form({
        on: 'blur',
        inline: true,

        // sets field rules
        fields: fieldsObj,

        // if all fields are validated
        onSuccess: function () {

            let scores = UTILS.getVals( questions );
            let newFriend = UTILS.newFriend( UTILS.val('name'), UTILS.val('img'), scores );

            $.get("/api/characters", function(data){
                let closest = UTILS.closest(data, newFriend);
                $('#charName').text(closest.name);
                console.log(closest.photo)
                $('#charImage').html('<img src=' + closest.photo + '>');
                console.log(closest);
                $('#character').modal('show');

            });

            $.get("/api/trekkies", function(data){
                let closest = UTILS.closest(data, newFriend);
                $('#trekkieName').text(closest.name);
                console.log(closest.photo)
                $('#trekkieImage').html('<img src=' + closest.photo + '>');
                console.log(closest);
                $('#trekkie').modal('show');
            });

            $.post("/api/trekkies", newFriend)
                .then(function (data) {
            });



            return false; // false is required if you do don't want to let it submit
        },

        // if any fields are invalid
        onFailure: function () {
            // alert('Failure');
            $('#error').modal('show');

            return false; // false is required if you do don't want to let it submit                                            
        },
    });

});
