const xyz = require('./people');

console.log(xyz.ages, xyz.people)

const os = require('os');

console.log(os.platform(), os.homedir(), os.freemem(), os.hostname(), os.getPriority());