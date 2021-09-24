const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}))//フォームを受け取るのに必要な文
app.post('/',(req,res)=>{
  const name = req.body.name//index.htmlの送りをnameとする;
  res.send(`君の名は${name}`);
  console.log("/ へアクセスがありました");
});

app.listen(port,()=>{//サーバー起動
  console.log(`listening at http://localhost:${port}`);
});