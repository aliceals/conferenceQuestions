import React from 'react'
import { addQ } from '../api'

class AddQuestion extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        this.setState({
            question: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        addQ(this.state)
    }



    render() {
        return (
            <>
                <h2>This will be where you can ask questions</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="question">Question</label>
                        <input type="text" className="form-control" name="question" onChange={this.handleChange} />
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