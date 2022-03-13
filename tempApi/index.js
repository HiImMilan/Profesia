var express = require("express");
var app = express();

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.get("/testApi/projects", (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    console.log("testApi/projects");
    const cursor = parseInt(req.query.cursor) || 0
    const pageSize = 25
  
    const data = Array(pageSize)
      .fill(0)
      .map((_, i) => {
        return {
          advertiser: 'Project ' + (i + cursor) + ` (server time: ${Date.now()})`,
          id: i + cursor,
        }
      })
  
    const nextId = cursor < 10 ? data[data.length - 1].id + 1 : null
    const previousId = cursor > -10 ? data[0].id - pageSize : null
  
    console.log("data", data);
    setTimeout(() => res.json({ data, nextId, previousId }), 1000)
  });