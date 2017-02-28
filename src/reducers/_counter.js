import i from 'immutable';
export default ({
  inc: (m,d,p) => i.fromJS(m)
    .updateIn(['counter','count'], x => x + 1)
    .toJS(),
  dec: (m,d,p) => i.fromJS(m)
    .updateIn(['counter','count'], x => x - 1)
    .toJS(),
})
