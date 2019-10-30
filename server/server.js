//服务端情动脚本
// nodejs 服务器
const sever = require("express")();
const Vue = require("vue");
/*创建渲染器*/
const renderer = require("vue-server-renderer").createRenderer();
const app = new Vue({
  template: "<div>Hello vue-server-renderer</div>"
});
sever.get("/", async (req, res) => {
  try {
    const html = await renderer.renderToString(app);
    console.log(html);
    res.send(html);
  } catch {
    res.status(500).send("服务器内部错误");
  }
});
sever.listen(3000, () => {
  console.log("192.168.11.18:3000/");
});
