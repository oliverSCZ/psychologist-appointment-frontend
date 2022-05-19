import React, { Component } from 'react';
import { getPsychos, setPsycho } from '../actions/userAction';
import { connect } from 'react-redux';

class PsychologistList extends Component {
    componentDidMount(){
        this.props.getPsychos();
    }

    handleOnClick = psychoId => {
        this.props.setPsycho(psychoId);
    }

    render(){

        const psychologists = this.props.psychologists;
        let renderList = 'No pschygologist added';
        if (psychologists) {
            renderList = psychologists.map(psychologists => {
                return (<a onClick={() => {this.handleOnClick(psychologists.id)}} key={psychologists.id} className="list-group-item">{psychologists.name}</a>);
            });
        }
        const currentPsycho = this.props.psychologists;
        let psychoDetails = 'No psychologist selected';
        if (currentPsycho) {
            psychoDetails = `Hi, my name is ${currentPsycho.name}, I can help you with problems related to: ${currentPsycho.area_of_specialty}, and you can contact me for more details to my email:${currentPsycho.email}`;
        }

        // console.log(currentPsycho)
        return(
            <div className="userlist-container">
               <div>
                    <select name="states"  className="form-control">
                      <option>--Select Psyhologist--</option>
                        { psychologists?.map( (psycho) => (
                          <option key={psycho.id} value={psycho.id}>{psycho.name}</option>
                          ))
                        }
                  </select> 
              </div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {psychoDetails}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        psychologists: state.psychologist.psychologists,
        currentPsycho: state.psychologist.id ? state.psychologist.psychologists.filter(psycho => psycho.id === state.psychologist.id)[0] : null
    }
}

export default connect(mapStateToProps, { getPsychos, setPsycho })(PsychologistList);