import React, { Component } from 'react';
import { getStates } from '../actions/userAction';
import { connect } from 'react-redux';

class StateList extends Component {

     state = {
    persons: []
  }


    componentDidMount(){
        this.props.getStates();
    }

    render() {
        const statesOfUsa = this.props.cities
      
    return (

      <div>
        <select name="states"  className="form-control">
          <option>--Select State--</option>
            { statesOfUsa?.map( (getState) => (
              <option key={getState.id} value={getState.id}>{getState.name}</option>
              ))
            }
      </select> 
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        cities: state.psychologist.cities
    }
}

export default connect(mapStateToProps, { getStates})(StateList);