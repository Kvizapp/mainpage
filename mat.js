const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-containers')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQesutions(shuffledQuestions[currentQuestionIndex])
}

function showQesutions(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Újrakezdés'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: 'Mennyi 319-240?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: true},
            { text: '73', correct: false}
        ]
    },
    {
        question: 'Mennyi 486:6?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: true},
            { text: '73', correct: false}
        ]
    },
    {
        question: 'Mennyi 158-nak a fele?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: true},
            { text: '73', correct: false}
        ]
    },
    {
        question: 'Mennyi 146:2?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: false},
            { text: '73', correct: true}
        ]
    },
    {
        question: 'Mennyi 300:2?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: false},
            { text: '150', correct: true}
        ]
    },
    {
        question: 'Mennyi 600:4?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: false},
            { text: '150', correct: true}
        ]
    },
    {
        question: 'Mennyi 14x2?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: false},
            { text: '28', correct: true}
        ]
    },
    {
        question: 'Mennyi 140:2?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: true},
            { text: '70', correct: false}
        ]
    },
    {
        question: 'Mennyi 146x2?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: false},
            { text: '292', correct: true}
        ]
    },
    {
        question: 'Mennyi 400x3?',
        answers: [
            { text: '1201', correct: false},
            { text: '1200', correct: true},
            { text: '79', correct: false},
            { text: '6000', correct: false}
        ]
    },
    {
        question: 'Mennyi 316:4?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: true},
            { text: '73', correct: false}
        ]
    },
    {
        question: 'Mennyi 237:3?',
        answers: [
            { text: '81', correct: false},
            { text: '75', correct: false},
            { text: '79', correct: true},
            { text: '73', correct: false}
        ]
    },
    {
        question: 'Mennyi 500:2?',
        answers: [
            { text: '150', correct: true},
            { text: '75', correct: false},
            { text: '79', correct: false},
            { text: '73', correct: false}
        ]
    },
    {
        question: '2x+5=3x+11?',
        answers: [
            { text: '-6', correct: true},
            { text: '6', correct: false},
            { text: '10', correct: false},
            { text: '5', correct: false}
        ]
    },
    {
        question: 'Mennyi 350:2?',
        answers: [
            { text: '175', correct: true},
            { text: '275', correct: false},
            { text: '75', correct: false},
            { text: '73', correct: false}
        ]
    },

    // ide írjátok a többi kérdést COMMA-val elválasztva!!!! A jó kérdésnél, pedig a "CORRECT:" property tegyétek"TRUE"-ra, a rosszaknál pedig "FALSE" legyen.
]