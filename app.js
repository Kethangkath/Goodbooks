const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.listen(port, () => {
    console.log(`Serving in port ${port}`);
  });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {//routing to reachout page
  res.render('index.html');
});
