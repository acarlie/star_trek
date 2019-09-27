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
    val: function (id){
        return $('#' + id).val().trim()
    },
    getQuestions: function(num){
        let questionsArr = [];
        for (i = 0; i < num; i++){
            questionsArr = questionsArr.concat(['question_' + i]);
        }
        return questionsArr;
    },
    getVals: function(arr){
        return arr.map(x => this.val(x));
    },
    setFields: function(arr, obj){
        let fields = {...obj};

        arr.forEach(el => {
            fields[el] = {
                identifier: el,
                rules: [
                    {type: 'empty', prompt: 'Please choose an answer'}
                ]
            }
        });

        return fields;
    },
    newFriend: function(name, img, arr){
        return {name: name, photo: img, scores: arr};
    }
}


$(document).ready(function () {

    // initialization of Semantic UI dropdowns
    $('.ui.dropdown').dropdown();

    // generating question ids and creating question rules
    let questions = util.getQuestions(10);
    let fieldsObj = util.setFields(questions, util.fields);

    // Semantic UI's form handling
    $('.ui.form').form({
        on: 'blur',
        inline: true,

        // sets field rules
        fields: fieldsObj,

        // if all fields are validated
        onSuccess: function () {

            alert('Success');
            let scores = util.getVals(questions);
            let newFriend = util.newFriend( util.val('name'), util.val('img'), scores);

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
