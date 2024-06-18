const http = require('http');
const express = require('express');
const path = require('path');

const app = express();
const server = http.createServer(app);
const PORT = 3100;

app.listen(PORT, () => {
	console.log(`server runing on http://localhost:${PORT}/`)
});

app.use(express.static(path.join(__dirname, 'public')));

const landingRoutes = require('./src/landing.routes.js');

app.use('/', landingRoutes);
