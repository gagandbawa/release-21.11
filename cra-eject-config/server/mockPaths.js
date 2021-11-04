const path = require('path');
const fs = require('fs');

module.exports = (app) => {
	app.get('/reports/:fileName', (req, res) => {
		const filePath = path.resolve(`public/reports/${req.params.fileName}`);
		res.sendFile(filePath);
	});

	app.route('/onedp/api/validate/zipCode').get((req, res) => {
		const obj = {
			status: 200,

			statusCode: '00',

			payload: { pageData: { zipCode: '75039', isValid: true } },
		};

		res.json(obj);
	});

	app.route('/onedp/api/getStates').get((req, res) => {
		const obj = fs.readFileSync(path.resolve('server/json/getStates.json'));

		const json = JSON.parse(obj);

		res.json(json);
	});

	// All new CAAS Services please add inside /server/json/CAAS with same  filename as URL
	app.route('*/vcg/services-v1/:fileName').get((req, res) => {
		const obj = fs.readFileSync(
			path.resolve(`server/json/CAAS/${req.params.fileName}`)
		);
		const json = JSON.parse(obj);
		res.json(json);
	});

	return app;
};
