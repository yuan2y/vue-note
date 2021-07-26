export default {
    state: {
        username:"yy",
        age:20,
        role:1
    },
    getters:{
        getUserInfo(state){
            return state
        }
    },
    mutations: {
        updateUserInfo(state, payload){
            //console.log(state, payload)
            state = Object.assign(state, payload)
        }
    },
    actions: {
        asyncUserInfo({commit},payload){
            setTimeout(()=>{
                commit('updateUserInfo',payload)
            },2000)
        }
    },
}