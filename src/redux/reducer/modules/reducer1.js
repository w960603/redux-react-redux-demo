
export const reducer1 = function (state=123, action) {
  console.log(state);
  switch(action.type){
    case 'ADD':
      console.log(action,state,'加一');
      return ++state
    case 'REDUCE': return state-1
    default : return state
  }
}
