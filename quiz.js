
let questions = [
    {
        id: 1,
        question: "what country does ronaldo serve as a captain?",
        answer: "portugal"
        option: [
            "Spain",
            "Manchester",
            "United states",
        ]
    },
{
    id: 2,
    question: "what is ronaldo's age as of 2015?"
    answer: "30"
    option: [
        "29",
        "48",
        "25",
    ]
},
{
    id: 3,
    question: "what trophy did ronaldo first won in 2007"
    answer: "FA cup"
    option: [
        "world cup",
        "summer olympics",
        "EU cup",
    ]
},
{
    id: 4,
    question: "where is the birthplace of ronaldo?"
    answer: "funchal, maderia, portugal"
    option: [
        "madrid, spain"
        "united states"
        "manchester"
    ]
},
{
    id: 5,
    question: " how old was ronaldo when he focused entirely on football"
    answer: "18"
    option: [
        "15"
         "16"
         "12"
    ]
  },
];

let question_count = 0;
let point = 0;


window.onload = function(){
    Show(question_count);
};

function show(count){
    let question = documentt.getElementById("questions");
    let[first, second, third] = questions[count].questions;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="opttion">${third}</li>
    </ul>`
    toggleActive();

}

function toggleActive(){
    let option = doctument.querySelectorAll("li.option");
    for(let i=0; i <option.lenth; i++){
        option[i].onclick = function(){
            for(let i=0; i< option.lenth; i++){
                if(option[i].classlist.contains("active")){
                    options[i].clasiclist.remove("active");
                }
            }
            option[i].classlist.add("active")
        }
    }
}

function next(){

    if(question_count == question.lenth -1){
        location.href = "final.html";
    }
    console.log(question_count);
}

let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == question[question_count].answer){
    points +=10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}