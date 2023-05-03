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
        question: 'Mikor volt a mohácsi csata?',
        answers: [
            { text: '1492', correct: false},
            { text: '1783', correct: false},
            { text: '1536', correct: false},
            { text: '1526', correct: true}
        ]
    },
        {
            question: 'Mikor volt a Dózsa György vezette parasztháború?',
            answers: [
                { text: '1514', correct: true},
                { text: '1539', correct: false},
                { text: '1554', correct: false},
                { text: '1528', correct: false}
            ]
        },
        {
            question: 'Mikor jött létre a kiegyezéssel az osztrák–magyar dualista állam?',
            answers: [
                { text: '1871', correct: false},
                { text: '1849', correct: false},
                { text: '1867', correct: true},
                { text: '1868', correct: false}
            ]
        },
        {
            question: 'Mikor volt Spartacus felkelése?',
            answers: [
                { text: 'Kr.u. 24-56', correct: false},
                { text: 'Kr.u. 34-37', correct: false},
                { text: 'Kr.u. 63-66', correct: false},
                { text: 'Kr.e. 74-71', correct: true}
            ]
        },
        {
            question: 'Mit takar a következő meghatározás? "Iparszervezési forma és érdekvédelmi szervezet Nyugat-Európában a XI–XII."',
            answers: [
                { text: 'földesúri rendszer', correct: false},
                { text: 'felhőkarcoló', correct: false},
                { text: 'manufaktúra', correct: false},
                { text: 'céh', correct: true}
            ]
        },
        {
            question: 'Mettől meddig tartott Bonaparte Napóleon császársága?',
            answers: [
                { text: '1804–1815', correct: true},
                { text: '1806–1817', correct: false},
                { text: '1798–1805', correct: false},
                { text: '1802–1812', correct: false}
            ]
        },
        {
            question: 'Mikor volt a karlócai béke a Szent Liga és a törökök között?',
            answers: [
                { text: '1649', correct: false},
                { text: '1699', correct: true},
                { text: '1684', correct: false},
                { text: '1667', correct: false}
            ]
        },
        {
            question: 'Mikor adták ki a német aranybullát?',
            answers: [
                { text: '1222', correct: false},
                { text: '1356', correct: true},
                { text: '1978', correct: false},
                { text: '1420', correct: false}
            ]
        },
        {
            question: 'Mikor volt Szigetvár ostroma?',
            answers: [
                { text: '1538', correct: false},
                { text: '1552', correct: false},
                { text: 'tegnap', correct: false},
                { text: '1566', correct: true}
            ]
        },
        {
            question: 'Mikor jött létre a kiegyezéssel az osztrák–magyar dualista állam?',
            answers: [
                { text: 'holnap', correct: false},
                { text: '1867', correct: true},
                { text: '1871', correct: false},
                { text: '1868', correct: false}
            ]
        },
        {
            question: 'Kik/Mik azok a girondiak?',
            answers: [
                { text: 'Egy birodalomépítő, gyarmatosító politika.', correct: false},
                { text: 'A mérsékelt köztársaságpártiak politikai csoportja a francia forradalom idején.', correct: true},
                { text: 'Az idegen területek meghódítása és birtokbavétele.', correct: false},
                { text: 'Egy birodalomromboló, gyarmatosító politika.', correct: false}
            ]
        },
        {
            question: 'Mettől meddig tartott Bonaparte Napóleon császársága?',
            answers: [
                { text: '1798–1805', correct: false},
                { text: '1804–1815', correct: true},
                { text: '1806–1817', correct: false},
                { text: '1868-1872', correct: false}
            ]
        },
        {
            question: 'Mikor volt a Trianoni békediktátum',
            answers: [
                { text: '1926', correct: false},
                { text: '1920', correct: true},
                { text: '1823', correct: false},
                { text: '1245', correct: false}
            ]
        },
        {
            question: 'Ki volt 4. Károly?',
            answers: [
                { text: 'Miniszterelnök', correct: false},
                { text: 'Szlovák uralkodó', correct: false},
                { text: 'Író', correct: false},
                { text: 'Az O-M-M uralkodója', correct: true}
            ]
        },
        {
            question: 'Ki volt Kun Béla?',
            answers: [
                { text: 'A fidesz vezetője', correct: false},
                { text: 'Egy Király', correct: false},
                { text: 'A KMP vezetője', correct: true},
                { text: 'A DK vezetője', correct: false}
            ]
        }
    ]
