import { ADD_NUMBER, SUBTRACT_NUMBER} from './Types'
// Actions

export const addAction = () => async dispatch => {
  
    dispatch({ type:ADD_NUMBER, payload:1});
  
  }

  export const subtractAction = () => async dispatch => {
  
    dispatch({ type:SUBTRACT_NUMBER, payload:1});
  
  }
