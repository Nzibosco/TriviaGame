$(document).ready(function () {

// WORK STILL TO BE DONE:
// - TO SET CORRECT ANSWERS
// - SHOWING OVERALL GRADES AFTER THE TEST. 

    var questionBank = {
        one: {
            question: " 1. Canada is located in continental",
            answers: [
                "Asia",
                "Africa",
                "America",
                "Europe",
                "Mars",
            ],
            correctAnswer: "America"
        },
        two: {
            question: "2. A numerical value used as a summary measure for a sample, such as sample mean, is known as a",
            answers: [
                "population parameter",
                "sample parameter",
                "sample statistic",
                "population mean",
                "None of the above answers is correct."
            ],
        },
        three: {
            question: "3. The capital city of Morrocco is",
            answers: [
                "Kigali",
                "Rabat",
                "Casablanca",
                "Seattle",
                "None of the above"
            ],
        },
        four: {
            question: "4. Since the mode is the most frequently occurring data value, it",
            answers: [
                "can never be larger than the mean",
                "is always larger than the median",
                "is always larger than the mean",
                "must have a value of at least two",
                "None of the above answers is correct."
            ],
        },
        five: {
            question: "5. The movie Django Unchained was directed by",
            answers: [
                "Antoine Fuqua",
                "Quentin Tarantino",
                "Bradely Cooper",
                "Jamie Foxx",
                "Angelina Jolie"
            ],
        },

    };
    console.log(questionBank);

    // function for first question

    $(".start-button").on("click", function () {

        // setting intervals for the timer
        var number = 10;
        var timer;
        function testTimer() {
            timer = setInterval(decrement, 1000);
        };
        testTimer();
        function decrement() {
            number--;
            $(".timer").text("Time left: " + number);
            if (number === 0) {
                alert("time's up!");
                clearInterval(timer);
                
            }
        };
        decrement();
        for (var i = 0; i < questionBank.one.answers.length; i++) {
            console.log(questionBank.one.answers[i]);
            var answersDiv = $("<Div></Div>");
            var answers = $("<input>" + " " + questionBank.one.answers[i] + "</input>");
            answers.attr("type", "checkbox");
            answers.attr("value", questionBank.one.answers[i]);
            answersDiv.append(answers);
            $(".answers").append(answersDiv);
        };
        var questionSection = $("<h5></h5>")
        questionSection.text(questionBank.one.question);
        $(".question").append(questionSection);
        $(".start-button").empty();


        //question 2
        for (var i = 0; i < questionBank.two.answers.length; i++) {
            console.log(questionBank.two.answers[i]);
            var answersDiv2 = $("<Div></Div>");
            var answers2 = $("<input>" + " " + questionBank.two.answers[i] + "</input>");
            answers2.attr("type", "checkbox");
            answers2.attr("value", questionBank.two.answers[i]);
            answersDiv2.append(answers2);
            $(".answers2").append(answersDiv2);
        };
        var questionSection2 = $("<h5></h5>")
        questionSection2.text(questionBank.two.question);
        $(".question2").append(questionSection2);
        
        // Question 3 

        for (var i = 0; i < questionBank.three.answers.length; i++) {
            console.log(questionBank.three.answers[i]);
            var answersDiv3 = $("<Div></Div>");
            var answers3 = $("<input>" + " " + questionBank.three.answers[i] + "</input>");
            answers3.attr("type", "checkbox");
            answers3.attr("value", questionBank.three.answers[i]);
            answersDiv3.append(answers3);
            $(".answers3").append(answersDiv3);
        };
        var questionSection3 = $("<h5></h5>")
        questionSection3.text(questionBank.three.question);
        $(".question3").append(questionSection3);

        // Question 4

        for (var i = 0; i < questionBank.four.answers.length; i++) {
            console.log(questionBank.four.answers[i]);
            var answersDiv4 = $("<Div></Div>");
            var answers4 = $("<input>" + " " + questionBank.four.answers[i] + "</input>");
            answers4.attr("type", "checkbox");
            answers4.attr("value", questionBank.four.answers[i]);
            answersDiv4.append(answers4);
            $(".answers4").append(answersDiv4);
        };
        var questionSection4 = $("<h5></h5>")
        questionSection4.text(questionBank.four.question);
        $(".question4").append(questionSection4);

        // Question 5

        for (var i = 0; i < questionBank.five.answers.length; i++) {
            console.log(questionBank.five.answers[i]);
            var answersDiv5 = $("<Div></Div>");
            var answers5 = $("<input>" + " " + questionBank.five.answers[i] + "</input>");
            answers5.attr("type", "checkbox");
            answers5.attr("value", questionBank.five.answers[i]);
            answersDiv5.append(answers5);
            $(".answers5").append(answersDiv5);
        };
        var questionSection5 = $("<h5></h5>")
        questionSection5.text(questionBank.five.question);
        $(".question5").append(questionSection5);

    });

    // correct answer 
    $(".answers").on("click", function(){
        console.log($(this).attr("value"));

        // TO BE CONTINUED HERE ........ 
    });

    
});