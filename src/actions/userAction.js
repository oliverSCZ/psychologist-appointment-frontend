import axios from 'axios';

export const getPsychos = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:4000/psychologists')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_PSYCHOLOGISTS',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const getStates = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:4000/cities')
        .then(response => {
            console.log(response);
            dispatch({
                type: 'LIST_STATES',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const setPsycho = psychoId => {
    return {
        type: 'SET_PSYCHO',
        payload: psychoId
    }
}

export const addForm = formObj => {
    return (dispatch) => {
        axios.post('http://127.0.0.1:4000/reservations/', formObj)
        .then(response => {
            dispatch({
                type: 'CREATE_FORM',
                payload: response.data
            }) 
        })
        .catch(error => {
            console.log(error);
        });
    }
}