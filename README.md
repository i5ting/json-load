# json-load

load json safety

## Installation

`npm install json-load`

## Usage

``` javascript
var json-load = require('json-load')

var config = json-load('package.json')

if (!config.error){
  console.log(config);
  console.log(config.name);
}

```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)