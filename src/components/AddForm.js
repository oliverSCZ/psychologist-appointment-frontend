import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPsychos,addForm } from '../actions/userAction';
import bckform from '../assets/img/bckform.jpg'
import psychologists from './PsychologistList'
class AddForm extends Component {
    componentDidMount(){
        getPsychos();
    }

    state = {
        user_id: '',
        psychologist_id: '',
        city_id: '',
        reservation_date: ''
    }

    handleTextChange = event => {
        const {target: {name, value}} = event;
        this.setState({ [name]: value });
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addForm(this.state);
        this.setState({
           user_id: '',
           psychologist_id: '',
           city_id: '',
           reservation_date: ''
        });
    }


    render(){
        const psychologists = this.props.psychologists;
        return(
            <div className="form-container">
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label>Current User</label>
                        <input onChange={this.handleTextChange} value={this.state.user_id} type="text" name="user_id" className="form-control" placeholder="user_id" />
                    </div>
                    <div>
                     <select name="states"  className="form-control">
                      <option>--Select Psyhologist--</option>
                        { psychologists?.map( (psycho) => (
                          <option key={psycho.id} value={psycho.id}>{psycho.name}</option>
                          ))
                        }
                     </select> 
                    </div>

                    <div className="form-group">
                        <label>Select Date</label>
                        <input onChange={this.handleTextChange} value={this.state.reservation_date} type="date" name="reservation_date" className="form-control" placeholder="reservation_date" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Create Reservation</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addForm })(AddForm);