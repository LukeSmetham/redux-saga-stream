import { call } from 'redux-saga/effects';

function * getCurrentUser() {
  return yield call([this.client.currentUser, this.client.currentUser.get]);
}

export default {
  getCurrentUser
}
