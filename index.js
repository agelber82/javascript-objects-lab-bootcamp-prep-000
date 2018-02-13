var recipes = { foo: 'bar' };


function updateObjectWithKeyAndValue(object, key, value) {
  return object.recipes({}, object, { [key]: value });
}