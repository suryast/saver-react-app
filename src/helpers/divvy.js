export function divvy(target, duration, min) {
  var randombit = target - min * duration;
  var out = [];

  for (var i = 0; i < duration; i++) {
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
