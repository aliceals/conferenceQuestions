import { getQuestions, addQ } from '../api'


export function setQuestions(questions) {
    return {
        type: 'SET_QUESTIONS',
        questions
    }
}


export function fetchQuestions() {
    console.log("in here")
    return dispatch => {
        getQuestions()
            .then(questions => {
                dispatch(setQuestions(questions))
            })
    }
}

export function addQuestion(question) {
    return dispatch => {
        addQ(question)
            .then(() => {
                dispatch(fetchQuestions())
            })
    }
}