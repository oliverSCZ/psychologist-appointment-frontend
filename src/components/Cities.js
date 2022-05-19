import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    states: []
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:4000/cities`)
      .then(res => {
        const states = res.data;
        this.setState({ states });
      })
  }

  render() {
    return (
      
      <select name="states"  className="form-control">
        <option>--Select State--</option>
        { this.state.states.map( (getState) => (
          <option key={getState.id} value={getState.id}>{getState.name}</option>
          ))
      }
      </select> 
    )
  }
}