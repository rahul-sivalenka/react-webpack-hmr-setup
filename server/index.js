const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

router.get('/', function (req, res) {
  res.send('Data from API');
});

router.get('/sub', function (req, res) {
  res.send('Data from /sub API');
});

app.use('/api', router);

app.use(express.static(path.join(__dirname, '..', 'dist')));

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
