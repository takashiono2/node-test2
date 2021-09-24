const express = require("express");
const app  = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.sendFile(`${__dirname}/public/index.html`);
  console.log("/ へアクセスがありました");
});
app.get("/image/:file",(req,res)=>{
  const file = req.params.file;

  res.sendFile(`${__dirname}/public/image/${file}`);
  console.log(`/image/${file} へアクセスがありました`);
});

app.listen(port,() => {
  console.log(`listening at http://localhost:${port}`);
});