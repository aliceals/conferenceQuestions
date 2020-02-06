import React from 'react'
import { fetchQuestions, deleteQuestion, starQuestion } from '../actions'
import { connect } from 'react-redux'

class DisplayQuestion extends React.Component {
    constructor() {
        super()
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.props.dispatch(fetchQuestions()), 10000)
    }

    componentDidUpdate() {
        // this.props.dispatch(fetchQuestions())
        this.timer = null;
    }

    deleteQuestion = (e) => {
        let id = e.target.name
        this.props.dispatch(deleteQuestion(id))

    }

    star = (e) => {
        let id = e.target.name
        this.props.dispatch(starQuestion(id))
    }

    render() {
        return (
            <>
                <h2>Current questions</h2>
                <ul>
                    {this.props.questions.map((questions, i) => {
                        return <li key={i}>{questions.question_string} <button name={questions.question_id}
                            onClick={this.deleteQuestion}>delete</button>
                            {questions.starred ? <button className="star" name={questions.question_id} onClick={this.star}>⭐</button>
                                : <button className="star" name={questions.question_id} onClick={this.star}>☆</button>}</li>
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