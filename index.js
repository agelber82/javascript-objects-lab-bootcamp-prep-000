var recipes = { foo: 'bar' };

var newObj = Object.assign({}, obj);

function updateObjectWithKeyAndValue(object, key, value) {
  return object.recipes({}, object, { [key]: value });
}