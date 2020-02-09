import React from 'react'
import AddQuestion from './AddQuestion'
import DisplayQuestion from './DisplayQuestion'

const App = () => {
  return (
    <div className="container">
      <h1>Conference Questions</h1>
      <AddQuestion />
      <DisplayQuestion />
    </div>
  )
}

export default App
