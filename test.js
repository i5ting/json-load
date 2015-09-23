var j = require('./index')

var config = j('package.json')

if (!config.error){
  console.log(config);
  console.log(config.name);
}



var config = j('package.json', 1)

if (!config.error){
  console.log(config);
  console.log(config.data.name);
}