import * as zipcodes from 'zipcodes'

module.exports = (req, res) => {
	const zipLookup = zipcodes.lookup(req.params.zip);
	if (!zipLookup) {
		res.send({error: 'Invalid zip provided.'})
		return;
	}
	if (req.query.radius) {
		const radiusZips = zipcodes.radius(req.params.zip, req.query.radius);
		const zips = [];
		radiusZips.forEach(zipCode => {
			if (zipLookup && !zips.find(({zip}) => zip === zipCode)) {
				zips.push(zipcodes.lookup(zipCode))
			}
		})
		res.send(zips);
		return;
	}
	res.send(zipLookup);
}
