
export default function lookup(o, s) {
  if (!o) return null;

  var path = s.split('.');
  for (var i = 0; i < path.length; i++) {
    var p = path[i];
    if (/\[\d+\]/.test(p)) {
      /* eslint-disable */
      console.warn('TODO: handle index lookups');
      /* eslint-enable */
    }

    if (!o[p]) return null;
    o = o[p];
  }
  return o;
}

