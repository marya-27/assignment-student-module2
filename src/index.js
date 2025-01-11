const express = require('express');
const bodyParser = require('body-parser');
const studentsRoutes = require('./students');

const app = express();
app.use(bodyParser.json());

app.use('/students', studentsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
