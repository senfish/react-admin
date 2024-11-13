// 复制一份index的文件
const fs = require("fs");
const path = require("path");
const process = require("process");
const sourcePath = path.resolve(process.cwd(), "dist/index.html");
const targetPath = path.resolve(process.cwd(), "dist/404.html");
async function copyFile() {
  try {
    await fs.copyFileSync(sourcePath, targetPath);
    console.log("复制成功");
  } catch (err) {
    console.log("复制报错", err);
  }
}

copyFile();
