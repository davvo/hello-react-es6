import xhr from 'xhr';

function doXHR(options) {
	return new Promise(function (resolve, reject) {
		xhr(options, function (err, resp, body) {
			if (err) {
				return reject(err.message);
			}
			if (resp.statusCode !== 200) {
				return reject(body);
			}
			var data = (typeof body === 'string')? JSON.parse(body) : body;
			resolve(data);
		});
	});	
}

export function get(url) {
	return doXHR({uri: url});
}

export function post(url, json) {
	return doXHR({
		uri: url,
		method: 'POST',
		json: json
	});
}