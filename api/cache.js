var _cache = {};

export default function cache(url, options) {
  var key = url + JSON.stringify(options);

  if (_cache[key]) {
    return new Promise(function(resolve, reject) {
      resolve(_cache[key]);
    });
  }

  return fetch(url, options)
    .then(data => data.json())
    .then(json => (_cache[key] = json));
}

