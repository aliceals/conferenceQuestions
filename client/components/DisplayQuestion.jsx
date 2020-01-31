import React from 'react'
import { fetchQuestions, deleteQuestion } from '../actions'
import { connect } from 'react-redux'

class DisplayQuestion extends React.Component {
    constructor() {
        super()
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchQuestions())
    }

    componentDidUpdate() {
        this.props.dispatch(fetchQuestions())
    }

    deleteQuestion = (e) => {
        let id = e.target.name
        this.props.dispatch(deleteQuestion(id))

    }

    render() {
        return (
            <>
                <h2>Current questions</h2>
                <ul>
                    {this.props.questions.map((questions, i) => {
                        return <li key={i}>{questions.question_string} <button name={questions.question_id} onClick={this.deleteQuestion}>delete</button></li>
                    })}
                </ul>

            </>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        questions: reduxState.questions
    }
}

export default connect(mapStateToProps)(DisplayQuestion)