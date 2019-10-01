
const fs = require('fs');


module.exports = function(app, path){

    let trekkies = JSON.parse(fs.readFileSync('./app/data/friends.json', 'utf-8'));
    let characters = JSON.parse(fs.readFileSync('./app/data/characters.json', 'utf-8'));

    app.get("/api/trekkies", function(req, res) {
        return res.json(trekkies);
    });
    
    app.post("/api/trekkies", function(req, res) {
        let newFriend = req.body;
        newFriend.scores = newFriend.scores.map(x => parseInt(x));

        let together = trekkies.concat([newFriend]);
        let json = JSON.stringify(together, null, 4);
        
        fs.writeFile("./app/data/friends.json", json, function(err) {
            if (err) {
                return console.log(err);
            }
        });
      
        res.json(newFriend);
    });

    app.get("/api/characters", function(req, res) {
        return res.json(characters);
    });
      
      
}

