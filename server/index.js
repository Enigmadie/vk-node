#!/usr/bin/env node

const Express = require('express');
const cors = require('cors');

const app = new Express();
const port = process.env.PORT || 5000;

require('./db.js');

app.use(require('./routes/index'));

app.listen(port, () => console.log(`Server was started on ${port}`));

