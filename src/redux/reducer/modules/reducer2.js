
export default function (state=[], action) {
  console.log(state);
  switch(action.type){
    case 'ADD_MSG':return [...state,action.payload]
    case 'DEL_MSG':
      return state.filter(item=>item.msg!==action.payload.msg)
    default : return state
  }
}
