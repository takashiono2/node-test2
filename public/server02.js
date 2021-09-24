const express = require("express");
const app  = express();
const port = 3000;

app.get('/',(req,res)=>{
  const name = req.query.name;
  res.send(`君の名は${name}`);
  console.log("/ へアクセスがありました");
});

app.listen(port,() => {
  console.log(`listening at http://localhost:${port}`);
});