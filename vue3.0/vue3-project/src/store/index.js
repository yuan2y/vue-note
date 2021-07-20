import {createStore} from 'vuex'
const path = require('path')
const files = require.context("./modules", false, /\.js$/)
let modules = {}
files.keys().forEach(key => {
    let name = path.basename(key, '.js')
    modules[name] = files(key).default || files(key)
})
export default createStore({
    modules
})
