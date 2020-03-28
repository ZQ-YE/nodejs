const {promisify} = require('util')
const figlet = promisify(require('figlet'))
//清空命令行
const clear = require('clear')
//命令行笔迹
const chalk = require('chalk')
//封装命令行显示代码 代码颜色 绿色
const log = content => console.log(chalk.green(content))
//克隆 gitHub 项目
const {clone} = require('./download')

module.exports = async name =>{
    // 打印欢迎界面
    clear()
    const data = await figlet('KKB Welcome')
    log(data)
    //克隆项目
    await clone('github:/ZQ-YE/webY',name)

}