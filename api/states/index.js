import * as states from 'country-state-city';

module.exports = (req, res) => {
	if (req.query.id) {
		res.send(states.default.getStateById(req.query.id));
		return;
	}
	if (req.query.country_id) {
		res.send(states.default.getStatesOfCountry(req.query.country_id));
		return;
	}
	res.send({error: 'Valid parameter (id | country_id) required.'});
};
