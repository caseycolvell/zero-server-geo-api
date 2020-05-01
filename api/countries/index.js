import * as country from 'country-state-city';

module.exports = (req, res) => {
	if (req.query.id) {
		res.send(country.default.getCountryById(req.query.id));
		return;
	}
	if (req.query.code) {
		res.send(country.default.getCountryByCode(req.query.code));
		return;
	}
	res.send(country.default.getAllCountries());
};
