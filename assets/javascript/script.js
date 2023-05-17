/** Questions */

const questions = [{
    question: "Which of these movies was directed by Quentin Tarantino?",
    answers: [
        {text: "The Green Mile", correct:false},
        {text: "Unbreakable", correct:false},
        {text: "The Shawshank Redemption", correct:false},
        {text: "Pulp Fiction", correct:true}
    ]
},

    {
        question: "What are the names of the main characters in the show 'Rick and Morty'?",
    answers: [
        {text: "Rick and Morty", correct:true},
        {text: "Jules and Vince", correct:false},
        {text: "Brad and Leo", correct:false},
        {text: "Toby and James", correct:false}
    ]
},
];


/** Varibale for questions */

const questionEl = document.getElementById("question")