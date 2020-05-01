import * as cities from 'country-state-city';

module.exports = (req, res) => {
	if (req.query.id) {
		res.send(cities.default.getCityById(req.query.id));
		return;
	}
	if (req.query.state) {
		res.send(cities.default.getCitiesOfState(req.query.state));
		return;
	}
	res.send({error: 'Valid parameter (id | state) required.'});
};
