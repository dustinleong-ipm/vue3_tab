import joint from './joint';

export default function merge(objValue, srcValue, key){
  console.log(key)
  if (typeof objValue === 'function' && typeof srcValue === 'function') {
    var result = joint([objValue, srcValue])
    return result;
  }
  return undefined;
}
