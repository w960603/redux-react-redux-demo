const action = {
  ADD_MSG: 'ADD_MSG',
  DEL_MSG: 'DEL_MSG'
}


export const ADD_MSG = msg => (dispatch, getState) => dispatch({
  type: action.ADD_MSG,
  payload: msg
})

export const DEL_MSG = async (msg) => ({
  type: action.DEL_MSG,
  payload: msg
})
