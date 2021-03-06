/* global UTILS */

$(document).ready(function () {
    // initialization of Semantic UI dropdowns
    $('.ui.dropdown').dropdown();

    // generating question ids and creating question rules
    const questions = UTILS.getIDs('.survey-question');
    const fieldsObj = UTILS.setFields(questions, UTILS.fields);

    // Semantic UI's form handling
    $('.ui.form').form({
        on: 'blur',
        inline: true,

        // sets field rules
        fields: fieldsObj,

        // if all fields are validated
        onSuccess: function () {
            const scores = UTILS.getVals(questions);
            const newFriend = UTILS.newFriend(UTILS.val('name'), UTILS.val('img'), scores);

            UTILS.renderModal('characters', newFriend, 'char');
            UTILS.renderModal('trekkies', newFriend, 'trekkie');

            $.post('/api/trekkies', newFriend)
                .then(function (data) {
                });

            $('#charBtn').on('click', function (e) {
                $('#trekkie').removeClass('opacity-hidden');
                $('input[type=text]').val('');
                $('.ui.dropdown').dropdown('clear');
            });

            $('#trekkieBtn').on('click', function (e) {
                $('#trekkie').addClass('opacity-hidden');
            });

            return false; // false is required if you do don't want to let it submit
        },

        // if any fields are invalid
        onFailure: function () {
            return false; // false is required if you do don't want to let it submit
        }
    });
});
