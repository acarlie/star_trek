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

            alert('Success');
            let scores = UTILS.getVals(questions);
            let newFriend = UTILS.newFriend( UTILS.val('name'), UTILS.val('img'), scores);

            $.post("/api/friends", newFriend)
                .then(function (data) {
            });

            return false; // false is required if you do don't want to let it submit
        },

        // if any fields are invalid
        onFailure: function () {
            alert('Failure');
            return false; // false is required if you do don't want to let it submit                                            
        },
    });

});
