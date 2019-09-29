import {combineReducers} from "redux";
// import * as reducers from './modules'
import {reducer1} from './modules/reducer1'
import reducer2 from './modules/reducer2'

// const req = require.context('./modules',false,/.js$/)
// const requireAll = requireContext=>requireContext.keys().map(requireContext)
//
// const reducers = requireAll(req).map(item=>item.reducer)
export const reducer = combineReducers({
  num:reducer1,
  msg: reducer2
})

