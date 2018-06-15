import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { changeName, changeDesc, changeInitial } from '../../../actions/index'
import { requestData } from '../../../actions/index'

import '../../../css/forms.css'

class CreateTask extends React.Component {
  // Function for send correct time format
  formatTime = (e) => {
    let pieces = this.props.initialField.split(':'), hour, minute, seconds
    hour = pieces[0]
    minute = pieces[1]
    seconds = pieces.length === 3 ? pieces[2] : '00'
    let initialField = hour + ':' + minute + ':' + seconds
    return initialField
  }

  // POST for send new task
  handleSubmit(event) {
    event.preventDefault()
    console.log(this.props)
    const dataSend = {
      'name': this.props.nameField,
      'description': this.props.descField,
      'order': 1,
      'initial_duration': this.formatTime(),
      'user': 1
    }
    this.props.fetchData('http://localhost:8000/api/createTask', 'POST', dataSend)
  }

  // Change the state for input name
  handleChange(event) {
    event.preventDefault()
    this.props.changeName(event.target.value)
  }

  // Change the state for input description
  handleDescChange(event) {
    event.preventDefault()
    this.props.changeDesc(event.target.value)
  }

  // Change the state for input initial duration
  handleTimerChange(event) {
    event.preventDefault()
    this.props.changeInitial(event.target.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <TextField
            type="text"
            name="name"
            placeholder="Nombre"
            margin="normal"
            required={true}
            value={this.props.nameField}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <TextField
            name="description"
            type="text"
            placeholder="Descripción"
            margin="normal"
            required={true}
            value={this.props.descField}
            onChange={this.handleDescChange.bind(this)}
          />
        </div>
        <div className="center-element input-time-field">
          <label>Tiempo Inicial
            <input
              name="initial_name"
              type="time"
              placeholder="Tiempo inicial"
              step="1"
              min="00:00:00"
              max="02:00:00"
              required={true}
              value={this.props.initialField}
              onChange={this.handleTimerChange.bind(this)}
            />
          </label>
        </div>
        <div className="center-element">
          <Button variant="contained" color="primary" type="submit">
            Crear tarea
          </Button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  nameField: state.create.nameField,
  descField: state.create.descField,
  initialField: state.create.initialField
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeName,
      changeDesc,
      changeInitial,
      fetchData: (url, methodRequest, dataSend) => requestData(url, methodRequest, dataSend)
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask)