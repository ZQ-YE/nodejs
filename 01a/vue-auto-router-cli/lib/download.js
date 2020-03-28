const {promisify} = require('util')
module.exports.clone = async function (repo,desc){
    //下载gitHub
    const download = promisify(require('download-git-repo'))
    //进度条
    const ora = require('ora')
    //定义一个进度条
    const process = ora(`下载...${repo}`)
    //开始 进度
    process.start()
    //开始 下载
    await download(repo,desc)
    // 下载成功
    process.success()
}