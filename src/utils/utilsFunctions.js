export function generateRandomId(length = 1) {
  var randId = "";
  var hasExclusion = false;
  while (!hasExclusion) {
    randId = Math.random().toString(36).slice(2).slice(0,5)
    hasExclusion = !(/^1Io0/.test(randId));
  }
  console.log(randId)
  return randId;
}