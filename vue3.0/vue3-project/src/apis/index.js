import request from './request'

let apis = {
    Post2DynamicChainMapNew: (data) => {
        return request.post2("/ras/aasKnowledgeBase/chaincenter/chainlist/dynamicChainMapNew", data)
    },
    PostRsEnterPrises: (data) => {
        return request.post("/api1/material/p/rsEnterPrises",data)
    }
}
export default apis