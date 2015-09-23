var fs = require('fs')
module.exports = function(source) {
	var file;
  var json = {
    error: "source is not exist,please check",
    detail:{ 
    }
  };

  if ( typeof source === "string" ){
    file = source;
  }else{
    return json;
  }
  
　try {
    value = fs.readFileSync(source, {
      encoding: 'utf-8'
    });
  
    var json_str = JSON.stringify(value, undefined, "\t");
  
    var json = JSON.parse(json_str);
  } catch(error) {
    json = {
      error: "can not parse file at " + source,
      detail : error
    }
  }

  return JSON.parse(json);
}