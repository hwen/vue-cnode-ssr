export function stringifyQuery(obj, parentName) {
  let res = null;
  if (obj) {
    res = Object.keys(obj)
      .map(key => {
        const val = obj[key];

        if (parentName) key = parentName + '[' + key + ']';
        if (val === undefined) return '';
        if (val === null) return encodeURIComponent(key);

        if (!Array.isArray(val) && typeof val === 'object') {
          return stringifyQuery(val, key).slice(1);
        }

        if (Array.isArray(val)) {
          const result = [];

          val.forEach(val2 => {
            if (val2 === undefined) return;
            if (val2 === null) {
              result.push(encodeURIComponent(key + '[]'));
            } else {
              result.push(encodeURIComponent(key + '[]') + '=' + encodeURIComponent(val2));
            }
          });

          return result.join('&');
        }

        return encodeURIComponent(key) + '=' + encodeURIComponent(val);
      })
      .filter(x => x.length > 0)
      .join('&');
  }

  return res ? `?${res}` : '';
}
