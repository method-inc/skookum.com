var _cache = {};

export default function cache(url, options) {
  var key = url + (options ? JSON.stringify(options) : '');

  // Commented out for now as it was caching on the server in digital ocean and not updating
  // job postings
  // if (_cache[key]) {
  //   return new Promise(function(resolve, reject) {
  //     resolve(_cache[key]);
  //   });
  // }

  return fetch(url, options)
    .then(data => data.json())
    .then(json => (_cache[key] = json));
}

