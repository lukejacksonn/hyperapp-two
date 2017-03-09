import fetchp from 'fetch-jsonp'
export default (options) => ({
  model: {
    user: {
      data: {},
      authed: false,
      fetching: false,
    },
  },
  actions: {
    user: {
      login: (m,d,a,e) => {
        a.user.fetching()
        fetchp('https://uinames.com/api')
        .then(data => data.json())
        .then(a.user.set)
        .catch(a.user.logout)
      },
      logout: (m,d,a,e) => ({
        user: { ...m.user,
          data: {},
          authed: false,
          fetching: false,
        }}),
      set: (m,d,a,e) => ({
        user: { ...m.user,
          data: d,
          authed: true,
          fetching: false,
        }}),
      fetching: (m,d,a,e) => ({
        user: { ...m.user,
          fetching: true,
        }}),
    },
  },
})
