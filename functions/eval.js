function looseJsonParse(obj) {
    return eval(`(${obj})`);
  }
  console.log(looseJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
  ))
  

function getDescendantProp(obj, desc) {
    const arr = desc.split('.');
    while (arr.length) {
      obj = obj[arr.shift()];
    }
    return obj;
  }
  
  const obj = {a: {b: {c: 0}}};
  const propPath = getPropPath();  // returns e.g. "a.b.c"
  const result = getDescendantProp(obj, propPath);
  