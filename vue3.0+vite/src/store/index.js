import {createStore} from 'vuex'
const files = import.meta.globEager("./modules/*.js")
let modules = {}
for (let key in files) {
    console.log(key)
    // ./modules/userInfo.js
    let name = key.split("/")[2].split(".js")[0]
    modules[name] = files[key].default || files[key]
}
export default createStore({
    modules
})

