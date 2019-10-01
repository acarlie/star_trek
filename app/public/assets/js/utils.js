const UTILS = {
    fields: {
        name: {
            identifier: 'name',
            rules: [
                {
                    type: 'regExp[/^[a-z\s]*$/i]',
                    prompt: 'Please only enter valid names.'
                },
                {
                    type: 'empty', prompt: 'Please enter your name.'
                }
            ]
        },
        img: {
            identifier: 'img',
            rules: [
                {
                    type: 'regExp[/^https?://(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:/[^/#?]+)+\.(?:jpg|gif|png)$/]',
                    prompt: 'Please enter a valid image url.'
                }, 
                {
                    type: 'empty', prompt: 'Please enter an image file.'
                }
            ]
        }
    },
    val: function (id){
        return $('#' + id).val().trim()
    },
    getIDs: function(selector){
        let ids = $(selector).map(function(){
            return $(this).data('id');
        }).get();
        return ids;
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