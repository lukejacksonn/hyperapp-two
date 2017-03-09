export default (options) => ({
  hooks: {
    onAction: name => console.log(name),
    onUpdate: (o,n) => console.log(o,n),
  },
  subscriptions: [
    (m,a) => console.log('Model:', m),
    (m,a) => console.log('Actions:', a),
  ]
})
