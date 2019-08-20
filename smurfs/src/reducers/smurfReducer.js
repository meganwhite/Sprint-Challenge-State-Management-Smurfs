import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE,
    DELETE_SMURF
  } from '../actions';
  
  const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SMURF_DATA_START:
        return {
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_SMURF_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          smurfs: action.payload,
          error: ''
        };
        case DELETE_SMURF:
            return {
              ...state,
              smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.id)
            };
      default:
        return state;
    }
  };

  