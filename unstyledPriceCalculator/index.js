const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'myWebPage.html'));
    console.log("Getting webpage!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
});


