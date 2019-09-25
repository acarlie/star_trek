
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
const fs = require('fs');

module.exports = function(app, path){

    let friends = JSON.parse(fs.readFileSync('./data/friends.json', 'utf-8'));

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    //need to add post
}

