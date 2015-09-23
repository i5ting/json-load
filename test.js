var j = require('./index')

var config = j('package.json')

if (!config.error){
  console.log(config);
  console.log(config.name);
}