import React from 'react'
import { addQ } from '../api'

class AddQuestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question_string: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            question_string: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        addQ(this.state)
        this.setState({ question_string: "" })
    }



    render() {
        return (
            <>
                <h2>This will be where you can ask questions</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="question">Question</label>
                        <input type="text" className="form-control" name="question_string" onChange={this.handleChange} value={this.state.question_string} />
                    </div>
                    <div className="submit">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </>
        )
    }
}
export default AddQuestion