/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS = 'SUCCESS';
export const ADDING_SMURF = 'ADDING_SMURF';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(err => { console.log(err) });
  }
}

export const createSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data})
      })
      .catch(error => { console.log(error)});
  }
}
