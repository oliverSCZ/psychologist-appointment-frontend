const psychologistReducer = (state = {}, action) => {
    switch(action.type) {
        case "LIST_PSYCHOLOGISTS":
            return {...state, psychologists: action.payload};
        case "LIST_STATES":
            return {...state, cities: action.payload};
        case "SET_PYSCHO":
            return {...state, psychoId: action.payload};
        case "CREATE_FORM":
            const psychos = state.psychos.concat(action.payload);
            return {...state, psychos};
        default:
            return state;
        }
}

export default psychologistReducer;