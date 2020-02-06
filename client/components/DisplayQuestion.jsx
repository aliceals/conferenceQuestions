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

    star = () => {
        console.log("clicked star")
    }

    render() {
        return (
            <>
                <h2>Current questions</h2>
                <ul>
                    {this.props.questions.map((questions, i) => {
                        return <li key={i}>{questions.question_string} <button name={questions.question_id}
                            onClick={this.deleteQuestion}>delete</button>
                            {questions.starred === null ? <span className="star" onClick={this.star}>★</span> : <span className="star" onClick={this.star}>starred</span>}</li>
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