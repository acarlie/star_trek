let questionsArr = ["Are you a strict follower of rules?", "Are you void of emotion?", "Are you usually cynical?", "Are you self-sacrificing?", "Do you often counsel others?", "Do others often have to tell you to calm down?", "Are you charismatic?", "Are you jovial?", "Are you good at delegating?", "Do you follow orders?"];
let questions = [];

questionsArr.forEach((el, i) => {
    let obj = {id: "question_" + i, question: el}
    questions.push(obj);
});

module.exports = function(app, path){

    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/survey", function(req, res) {
        res.render("survey", {questions: questions});
    });
    
}