# loadjson

load json safety

## Installation

`npm install loadjson`

## Usage

``` javascript
var loadjson = require('loadjson')

var config = loadjson('package.json')

if (!config.error){
  console.log(config);
  console.log(config.name);
}

```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)