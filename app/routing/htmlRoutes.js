const UTILS = require('./../utils');
const CONSTS = require('./../constants');

const questions = UTILS.genQuestions(CONSTS.QUESTIONS);

module.exports = function (app, path) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/survey', function (req, res) {
        res.render('survey', { questions: questions });
    });
};
