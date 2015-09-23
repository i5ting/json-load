var fs = require('fs')
module.exports = function(source) {
  var file
    ,is_api;
    
  var json = {
    error: "source is not exist,please check",
    detail:{ 
    }
  };
  
  if (arguments.length == 2) {
    is_api = arguments[1];
  }

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
      error : "can not parse file at " + source,
      detail : error
    }
  }

  return arguments.length == 2 ? json_parse_api(json, is_api) : JSON.parse(json);
}

function json_parse_api(json, api_type){
  if(api_type == 0){
    return {
      data: JSON.parse(json),
      status: {
        code : 0,
        msg  : 'sucess'
      }
    }
  }else{
    return {
      data: JSON.parse(json),
      status: {
        code : api_type,
        msg  : 'error'
      }
    }
  }
}