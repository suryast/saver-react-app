// Logic to get random amount for breaking the saving target into random amount over the specified duration
// from https://stackoverflow.com/questions/45652867/how-to-divide-number-n-in-javascript-into-x-parts-where-the-sum-of-all-the-part
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
