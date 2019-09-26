
const fs = require('fs');

module.exports = function(app, path){

    let friends = JSON.parse(fs.readFileSync('./app/data/friends.json', 'utf-8'));

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        let newFriend = req.body;
        newFriend.scores = newFriend.scores.map(x => parseInt(x));

        let together = friends.concat([newFriend]);
        let json = JSON.stringify(together, null, 4);
        
        fs.writeFile("./app/data/friends.json", json, function(err) {
            if (err) {
                return console.log(err);
            }
        });
      
        res.json(newFriend);
    });
      
      
}

