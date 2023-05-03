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
        startButton.innerText = 'Gratulálunk, teljesítetted a kvízt, ha még gyakorolni szeretnél, akkor nyomj ide!'
        
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
        question: 'Mi Zimbabwe fővárosa?',
        answers: [
            { text: 'Harare', correct: true},
            { text: 'Lusaka', correct: false},
            { text: 'Luanda', correct: false},
            { text: 'Salisbury', correct: false}
        ]
    },
        {
            question: 'Mi az Egyesült Államok fővárosa?',
            answers: [
                { text: 'Washington DC', correct: true},
                { text: 'New York City', correct: false},
                { text: 'Philadelphia', correct: false},
                { text: 'New Jersey', correct: false}
            ]
        },
        {
            question: 'Mi Észak-Korea fővárosa?',
            answers: [
                { text: 'Szöul', correct: false},
                { text: 'Phenjan', correct: true},
                { text: 'Busan', correct: false},
                { text: 'Gyeonggi-do', correct: false}
            ]
        },
        {
            question: 'Mi Dél-Korea fővárosa?',
            answers: [
                { text: 'Busan', correct: false},
                { text: 'Phenjan', correct: false},
                { text: 'Szöul', correct: true},
                { text: 'Gyeonggi-do', correct: false}
            ]
        },
        {
            question: 'Mi Japán fővárosa?',
            answers: [
                { text: 'Kiotó', correct: false},
                { text: 'Osaka', correct: false},
                { text: 'Hirosima', correct: false},
                { text: 'Tokió', correct: true}
            ]
        },
        {
            question: 'Melyik ország lakossága a legnagyobb?',
            answers: [
                { text: 'Oroszország', correct: false},
                { text: 'Japán', correct: false},
                { text: 'Vatikán város', correct: false},
                { text: 'Kína', correct: true}
            ]
        },
        {
            question: 'Melyek Kenya nemzeti nyelvei?',
            answers: [
                { text: 'xhosa, szuahéli és angol', correct: false},
                { text: 'xhosa, afrikaans és angol', correct: false},
                { text: 'szuahéli és angol', correct: true},
                { text: 'zulu és angol', correct: false}
            ]
        },
        {
            question: 'Melyik a világ legnagyobb országa?',
            answers: [
                { text: 'Ausztrália', correct: false},
                { text: 'Oroszország', correct: true},
                { text: 'Kanada', correct: false},
                { text: 'USA', correct: false}
            ]
        },
        {
            question: 'Hány szigete van a Fülöp-szigeteknek?',
            answers: [
                { text: '7,640', correct: true},
                { text: '1400', correct: false},
                { text: '6,440', correct: false},
                { text: '4000', correct: false}
            ]
        },
        {
            question: 'Mi Perzsia új neve?',
            answers: [
                { text: 'Indonézia', correct: false},
                { text: 'Irán', correct: true},
                { text: 'Szíria', correct: false},
                { text: 'Nepál', correct: false}
            ]
        },
        {
            question: 'Melyik a világ legnagyobb tava?',
            answers: [
                { text: 'Lake Michigan', correct: false},
                { text: 'Balaton', correct: false},
                { text: 'Kaszpi-tenger', correct: true},
                { text: 'Green Lake', correct: false}
            ]
        },
        {
            question: 'Melyik a világ legmagasabb hegye?',
            answers: [
                { text: 'Mount Rushmore', correct: false},
                { text: 'Sínai hegy', correct: false},
                { text: 'Mount Everest', correct: true},
                { text: 'Kékes', correct: false}
            ]
        },
        {
            question: 'Melyik a világ leghosszabb folyója?',
            answers: [
                { text: 'Duna', correct: false},
                { text: 'Colorado folyó', correct: false},
                { text: 'Wisconsin folyó', correct: false},
                { text: 'Nílus', correct: true}
            ]
        },
        {
            question: 'Mi a világ legnagyobb óceánja??',
            answers: [
                { text: 'Csendes-óceán', correct: true},
                { text: 'Jeges tenger', correct: false},
                { text: 'Atlanti-óceán', correct: false},
                { text: 'Indiai-óceán', correct: false}
            ]
        },
        {
            question: 'Melyik országban él a pápa?',
            answers: [
                { text: 'Vatikánváros', correct: true},
                { text: 'Magyarország', correct: false},
                { text: 'Britannia', correct: false},
                { text: 'Olaszország', correct: false}
            ]
        }
        
    ]
