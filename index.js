const express = require('express');
const PORT = 8080;
const chromeStoreStats = require('chrome-webstore-stats');
var app = express();

app.use((req, res, next) => {
	res.type('json');
	next();
});
app.get('/webstore-stats', async (req, res) => {
	var extensionID = req.query.id;
	var data = await chromeStoreStats(extensionID);

	if (data.error) {
		return res.status(400).json(data);
	}

	return res.json(data);
});
app.listen(PORT);