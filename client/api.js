import request from 'superagent'

export function addQ(question) {
    return request.post('/messages')
        .send(question)
        .then(res => res.body)
}