function encode(o) {
  return Object.keys(o).reduce(function(str, k) {
    var v = o[k];
    if (typeof v === 'object') {
      v = JSON.stringify(o[k]);
    }

    if (str) {
      return str + '&' + k + '=' + encodeURIComponent(v);
    }

    return k + '=' + encodeURIComponent(v);
  }, '');
}

export default function contact(req, res) {
  var {body} = req;
  var {endpoint, hsCookie} = body;
  const REQUIRED_FIELDS = [
    'firstname', 'email', 'how_can_we_help_you_',
  ];

  var missingFields = REQUIRED_FIELDS.reduce(
    (missing, n) =>
      (typeof body[n] === 'undefined' || body[n] === '') ? missing.concat(n) : missing,
      []);

  if (missingFields.length > 0) {
    return res.status(400).send({message: 'Oops. It looks like you’re missing some required fields.', fields: missingFields});
  }

  var referer = req.headers.referer || req.headers['X-Forwarded-For'];

  delete body.endpoint;
  delete body.hsCookie;

  // hsContext
  /* eslint-disable */
  body.hs_context = {
  /* eslint-enable */
    hutk: hsCookie,
    ipAddress: req.connection.remoteAddress,
    pageUrl: referer,
    pageName: referer,
  };

  var payload = encode(body);
  fetch(endpoint, {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
  }).then(
    response => res.send(JSON.stringify(response.body || {message: 'Success'})),
    err => res.status(500).send(err)
  );
}
