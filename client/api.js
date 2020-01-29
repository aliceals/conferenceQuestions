import request from 'superagent'

export function addQ(question) {
    return request.post('/api/v1/messages')
        .send(question)
        .then(res => res.body)
}

export function getQuestions() {
    return request.get('/api/v1/messages')
        .then(res => res.body)
        .then(setTimeout(getQuestions, 5000))
}


export function deleteQ(id) {
    return request.delete('/api/v1/messages')
        .send({ id })
        .then(res => res.body)
}