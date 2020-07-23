const express = require('express')
const os = require('os')
const app = express()
const port = 3000

if (process.env.TRUST_PROXY && process.env.TRUST_PROXY === '1') {
	app.enable('trust proxy')
}
app.use('/', (req, res) => {
	const data = {
                server_name: os.hostname(),
		url: req.originalUrl,
		host: req.hostname,
		ip: req.ip
	}
	res.json(data);
});

app.listen(port, () => console.log(`Example app listening at http://0.0.0.0:${port}`))

