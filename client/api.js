import request from 'superagent'

export function addQ(question) {
    return request.post('/api/v1/messages')
        .send(question)
        .then(res => res.body)
}