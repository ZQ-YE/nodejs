test('测试hello world',()=>{
    const helloworld = require('../index')
    //人工判断测试结果
    console.log('helloworld:',helloworld)
    //断言
    expect(helloworld)
        .toBe('hello world')
})