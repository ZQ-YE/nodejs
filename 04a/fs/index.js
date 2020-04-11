// 实现⼀个⽂件系统读写数据库
const fs = require("fs");
function get(key) {
    fs.readFile("./04a/fs/db.json", (err, data) => {
        const json = JSON.parse(data);
        console.log(json[key]);
    });
}
function set(key, value) {
    fs.readFile("./04a/fs/db.json", (err, data) => {
        // 可能是空⽂件，则设置为空对象
        const json = data ? JSON.parse(data) : {};
        json[key] = value; // 设置值
        // 重新写⼊⽂件
        fs.writeFile("./04a/fs/db.json", JSON.stringify(json), err => {
            if (err) {
                console.log(err);
            }
            console.log("写⼊成功！");
        });
    });
}

// 命令⾏接⼝部分
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on("line", function (input) {
    const [op, key, value] = input.split(" ");
    if (op === 'get') {
        get(key)
    } else if (op === 'set') {
        set(key, value)
    } else if (op === 'quit') {
        rl.close();
    } else {
        console.log('没有该操作');
    }
});
rl.on("close", function () {
    console.log("程序结束");
    process.exit(0);
});