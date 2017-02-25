const capitalize = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const decapitalize = (string) =>
  string.charAt(0).toLowerCase() + string.slice(1);

const namespace = (obj, prefix) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key+capitalize(prefix)] = obj[key];
    return acc;
  }, {});

export const uniteActions = (actions) =>
  Object.keys(actions).reduce((acc, key) => {
    var nsa = namespace(actions[key], key)
    return Object.assign({}, acc, nsa);
  }, {})

export const uniteRoutes = (views) =>
  Object.keys(views).reduce((acc, key) => {
    acc['/'+decapitalize(key)] = views[key]
    return acc;
  }, {})
