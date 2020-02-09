import { getQuestions, addQ, deleteQ, starQ, moveUpQ } from '../api'


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

export function starQuestion(id, bool) {
    return dispatch => {
        starQ(id, bool)
            .then(() => {
                dispatch(fetchQuestions())
            })
    }
}

export function moveUpQuestion(id) {
    return dispatch => {
        moveUpQ(id)
            .then(() => {
                dispatch(fetchQuestions())
            })
    }
}