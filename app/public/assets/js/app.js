const util = {
    getQuestions: function (num) {
        let questionsArr = [];
        for (i = 1; i <= num; i++) {
            questionsArr = questionsArr.concat(['#question_' + i]);
        }
        return questionsArr.map(x => $(x).val().trim());
    }
}


$(document).ready(function () {
    $('.ui.dropdown').dropdown();

    $('.ui.form').form({
        on: 'blur',
        inline: true,
        fields: {
            name: {
                identifier: 'name',
                rules: [{
                    type: 'regExp[/^[a-z\s]*$/i]',
                    prompt: 'Please only enter valid names.'
                }]
            },
            img: {
                identifier: 'img',
                rules: [{
                    type: 'regExp[/^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$/]',
                    prompt: 'Please enter a valid image url.'
                }]
            },
            dropdown: {
                identifier: 'dropdown',
                rules: [{
                    type: 'empty',
                    prompt: 'Please select a dropdown value'
                }]
            },
        },
        onSuccess: function () {
            alert('Success');
            let scores = util.getQuestions(10);

            var newFriend = {
                name: $('#name').val().trim(),
                photo: $('#img').val().trim(),
                scores: scores
            }

            $.post("/api/friends", newFriend)
                .then(function (data) {
                    // console.log(data);
                });

            return false; // false is required if you do don't want to let it submit

        },
        onFailure: function () {
            alert('Failure');
            return false; // false is required if you do don't want to let it submit                                            
        },
    });

});
