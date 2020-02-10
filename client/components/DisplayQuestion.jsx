import React from 'react'
import { fetchQuestions, deleteQuestion, starQuestion, upVote } from '../actions'
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
        let bool = e.target.value
        let id = e.target.name
        this.props.dispatch(starQuestion(id, bool))
    }

    upVote = (e) => {
        let id = e.target.name
        let votes = e.target.value
        let questionData = {
            id,
            votes
        }
        this.props.dispatch(upVote(questionData))
    }



    render() {
        return (
            <>
                <h2>Current questions</h2>
                <ul>
                    {this.props.questions.map((questions, i) => {
                        return <li key={i}>{questions.question_string.charAt(0).toUpperCase() + questions.question_string.substring(1)} <button name={questions.question_id} className="delete"
                            onClick={this.deleteQuestion}>delete</button>
                            {questions.starred ? <button className="button" name={questions.question_id} value={0} onClick={this.star}>⭐</button>
                                : <button className="button" name={questions.question_id} value={1} onClick={this.star}>☆</button>}<button name={questions.question_id} value={questions.votes} className="button" onClick={this.upVote}>⬆</button>
                            Votes: {questions.votes}</li>
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