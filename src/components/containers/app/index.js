import React from 'react'

import Header from '../../presentational/header'
import CreateTask from '../createTask'
import GetTask from '../getTask'

import '../../../css/App.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CreateTask/>
        <GetTask/>
      </div>
    )
  }
}

export default App
