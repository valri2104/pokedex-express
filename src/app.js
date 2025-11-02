const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

const PORT = process.env.PORT || 3000;

app.use('/', apiRoutes);

app.listen(PORT, () => {
    console.log(`Pokeneas app listening on port ${PORT}`);
});
