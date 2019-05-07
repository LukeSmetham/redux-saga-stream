import { call } from 'redux-saga/effects';

function * getProfile(profileID) {
  const user = this.client.user(profileID);
  return yield call([user, user.profile]);
}
