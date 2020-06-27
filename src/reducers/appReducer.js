
export default (state = {number: 0}, action) =>{
    console.log(action)
    switch(action.type){
        case 'ADD_NUMBER': 
        return {...state, number: state.number + action.payload};
        case 'SUBTRACT_NUMBER': 
        return {...state, number: state.number - action.payload};
        default:
            return state
    }
}