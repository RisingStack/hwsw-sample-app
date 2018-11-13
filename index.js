const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log('app.get - /');
  res.send('Hello from Docker!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
