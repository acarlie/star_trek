function genQuestions(arr){
    let questions = [];

    arr.forEach((el, i) => {
        let obj = {num: i + 1, id: "question_" + i, question: el}
        questions = questions.concat([obj]);
    });

    return questions;
}

module.exports = {
    genQuestions: genQuestions,
}