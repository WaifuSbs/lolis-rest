const express = require('express');
const routes = require('./routes');
const lib = require('./library');
const app = express();

app.use('/', routes);

app.use(function(req, res) {
    res.status(404);
    lib.response(res, false, 404, "Not found");
});

app.listen(process.env.PORT || 3000, function() {
    console.log(`Server started on port: ${process.env.PORT || 3000}`);
});