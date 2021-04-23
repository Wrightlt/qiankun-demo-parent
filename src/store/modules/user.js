export default {
    namespaced: true,
    state: {
        user: '',
        token: ''
    },
    mutations: {
        SET_USER_INFO(state, userInfo) {
            state.user = userInfo.user
            state.token = userInfo.token
        }
    }
}