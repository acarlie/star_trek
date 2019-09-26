const util = {
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
        }
    },
    getQuestions: function(num){
        let questionsArr = [];
        for (i = 1; i <= num; i++){
            questionsArr = questionsArr.concat(['question_' + i]);
        }
        return questionsArr;
    },
    getVals: function(arr){
        return arr.map(x => $('#' + x).val().trim());
    },
    setFields: function(arr){
        for (let x of arr){
            util.fields[x] = {
                identifier: x,
                rules: [
                    {type: 'empty', prompt: 'Please choose an answer'}
                ]
            }
        }
    }
}


$(document).ready(function () {
    let questions = util.getQuestions(10);
    $('.ui.dropdown').dropdown();

    util.setFields(questions);

    console.log(util.fields);

    $('.ui.form').form({
        on: 'blur',
        inline: true,
        fields: util.fields,
        onSuccess: function () {
            alert('Success');
            let scores = util.getVals(questions);

            var newFriend = {
                name: $('#name').val().trim(),
                photo: $('#img').val().trim(),
                scores: scores
            }
            console.log(newFriend);
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
