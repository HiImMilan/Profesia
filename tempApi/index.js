var express = require("express");
var app = express();

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.get("/testApi/projects", (req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    console.log("testApi/projects");
    const cursor = parseInt(req.query.page) || 0
    const pageSize = 12
  
    const data = Array(pageSize)
      .fill(0)
      .map((_, i) => {
        return {
          advertiser: 'Project XYZ',
          coverImage: 'https://live.staticflickr.com/65535/51225686111_9e7cf4912c_k_d.jpg',
          id: i + cursor,
          advertiserName: "Jožko Novák",
          addedDate: "2020-01-01",
          remainingTime: "1",
          title: "Project " + i + " - " + cursor,
        }
      })
  
    //console.log("data", data);

    console.log("request", req.query);

    setTimeout(() => res.json({ data, cursor}), 1000)
  });