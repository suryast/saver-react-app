export function divvy(number, parts, min) {
  var randombit = number - min * parts;
  var out = [];

  for (var i = 0; i < parts; i++) {
    out.push(Math.random());
  }

  var mult =
    randombit /
    out.reduce(function(a, b) {
      return a + b;
    });

  return out.map(function(el) {
    return Math.round(el * mult + min);
  });
}
