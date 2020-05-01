import * as zipcodes from 'zipcodes'

module.exports = (req, res) => {
	const zipCodes = zipcodes.lookupByName(req.params.city, req.params.state);
	if (zipCodes.length === 0) {
		res.send({error: 'Invalid state or city provided.'});
		return;
	}
	if (req.query.radius) {
		const zips = [];
		zipCodes.forEach((zipCode) => {
			const radiusZips = zipcodes.radius(zipCode.zip, req.query.radius);
			radiusZips.forEach(newZip => {
				const zipLookup = zipcodes.lookup(newZip);
				if (zipLookup && !zips.find(({zip}) => zip === newZip)) {
					zips.push(zipcodes.lookup(newZip))
				}
			})
		});
		res.send(zips);
		return;
	}
	res.send(zipcodes.lookupByName(req.params.city, req.params.state))
}
