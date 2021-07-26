import Mock from 'mockjs'

const url = {
    tableData1: '/api/tableData1',
    tableData2: '/api/tableData2',
    tableData3: '/api/tableData3',
}

//通过mock.js模拟get请求
Mock.mock(url.tableData1, 'get', {
    code: 200,
    message: '请求成功',
    'dataSource|5': [{
        'key|+1': 1,
        'mockTitle|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
        'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
        'mockAction|1': ['下载', '试听', '喜欢']
    }]
})

Mock.mock(url.tableData2, 'get',{
    ret: 0,
    'data': {
        'nickname':'@cname'
    }
})

//通过mock.js模拟post请求
Mock.mock(url.tableData3, 'post',({body})=>{
    console.log(JSON.parse(body))
    return Mock.mock({
        code: 200,
        message: '@cword(20)',
        data:{
            'nickname':'@cname'
        }
    })
})




