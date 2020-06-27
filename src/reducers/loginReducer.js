
export default (state = {loggedin: false}, action) =>{
    switch(action.type){
        case 'LOGIN': 
        return {...state, loggedin: true};
        case 'LOGOUT': 
        return {...state, loggedin:false};
        default:
            return state
    }
}