import * as types from '@/store/mutations-types'

const mutations = {
  /**
   * 记录当前用户选择的tab index
   * @param {*} state 
   * @param {*} value 
   */
  [types.TAB_CONTROL_CURRENT_INDEX](state, index) {
    state.homeTabControlIndex = index
  },
  /**
   * 记录当前用户滚动条的位置
   * @param {}} state 
   * @param {*} index 
   */
  [types.TAB_CONTROL_Y](state, { type, y }) {
    state.homeTabControlY[type] = y
  }
}

export default mutations
