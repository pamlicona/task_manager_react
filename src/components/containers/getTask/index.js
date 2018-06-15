import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestData } from '../../../actions/index'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import '../../../css/forms.css'

class GetTask extends React.Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:8000/api/getTask', 'GET', {})
  }

  validateData = () => {
    if (this.props.tasksArray.length > 0) {
      return (
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Duración</TableCell>
              <TableCell>Tiempo restante</TableCell>
              <TableCell>Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.tasksArray.map(task => {
              return (
                <TableRow key={task.id}>
                  <TableCell component="th" scope="row">{task.name}</TableCell>
                  <TableCell component="th" scope="row">{task.description}</TableCell>
                  <TableCell component="th" scope="row">{task.user.username}</TableCell>
                  <TableCell component="th" scope="row">{task.status.name}</TableCell>
                  <TableCell component="th" scope="row">{task.initial_duration}</TableCell>
                  <TableCell component="th" scope="row">{task.time_left}</TableCell>
                  <TableCell component="th" scope="row">{task.create_date}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

      )
    }
    if (this.props.hasErrored) {
      return <h3>Lo sentimos, ha ocurrido un error.</h3>
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>
    }
  }

  render() {
    return (
      <Paper className="root">
        <h2>Listado de tareas</h2>
        {this.validateData()}
      </Paper>
    )
  }
}

const mapStateToProps = state => ({
  tasksArray: state.tasks.tasksArray,
  hasErrored: state.tasks.hasErrored,
  isLoading: state.tasks.isLoading
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchData: (url, methodRequest, dataSend) => requestData(url, methodRequest, dataSend)
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GetTask)