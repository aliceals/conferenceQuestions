import React from 'react'
import { getQuestions } from '../api'

class DisplayQuestion extends React.Component {
    constructor() {
        super()
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        getQuestions()
            .then(questions => {
                this.setState({ questions: questions })
            })
    }

    render() {
        console.log(this.state)
        return (
            <>
                <h2>Current questions</h2>
                <ul>
                    {this.state.questions.map((questions, i) => {
                        return <li key={i}>{questions.question_string}</li>
                    })}
                </ul>

            </>
        )
    }
}
export default DisplayQuestion