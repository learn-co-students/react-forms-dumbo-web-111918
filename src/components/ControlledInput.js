import React, { Component } from 'react'

export default class ControlledInput extends Component {

    state = {
        firstName: "",
        lastName: ""
    }

    handleFirstnameChange = (event) => {
      this.setState({
          firstName: event.target.firstName
      })
    }
    
    handleLastNameChange = (e) => {
      this.setState({
          lastName: e.target.lastName
      })
    }
    


  render() {
   

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" name="firstName" onChange={event => this.handleFirstnameChange(event)} value={this.state.firstName} />
            <input type="text" name="lastName" onChange={e => this.handleLastNameChange(e)} value={this.state.lastName} /> 
        </form>
      </div>
    )
  }
}
