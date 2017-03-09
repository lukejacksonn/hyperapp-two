import { h } from 'hyperapp'
export default ({m,a}) =>
  <user->
    { m.user.authed ?
      <authed->
        <status->{`You are logged in as`}</status->
        <data->
          <name->{m.user.data.name} {m.user.data.surname}</name->
          <region->From {m.user.data.region}</region->
        </data->
        <button onclick={e => a.user.logout()}>LOGOUT</button>
      </authed-> :
      <unauthed->
        <status->{`You are not logged in`}</status->
        <button
          onclick={e => a.user.login()}
          disabled={m.user.fetching}
        >LOGIN</button>
      </unauthed->
    }
  </user->
