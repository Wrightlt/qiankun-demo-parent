import { initGlobalState } from 'qiankun'

const initialState = {}
// 初始化 state
const actions = initGlobalState(initialState);


// actions.onGlobalStateChange((state, prev) => {
//   // state: 变更后的状态; prev 变更前的状态
//     console.log(state, prev)
// })
// actions.setGlobalState(state)
// actions.offGlobalStateChange()

export default actions




