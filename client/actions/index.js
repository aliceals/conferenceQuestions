import { getQuestions, addQ, deleteQ } from '../api'


export function setQuestions(questions) {
    return {
        type: 'SET_QUESTIONS',
        questions
    }
}


export function fetchQuestions() {
    return dispatch => {
        getQuestions()
            .then(questions => {
                dispatch(setQuestions(questions))
            })
            .then(setTimeout(fetchQuestions, 5000))
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

export function deleteQuestion(id) {
    return dispatch => {
        deleteQ(id)
            .then(() => {
                dispatch(fetchQuestions())
            })
    }

}