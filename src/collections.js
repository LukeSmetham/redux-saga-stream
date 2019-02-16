import { eventChannel, END } from 'redux-saga';
import { call } from 'redux-saga/effects';

function * addCollectionEntry(collectionID, entryID = null, data) {
  if (!collectionID) {
    throw 'Must include collectionID.'
  }

  if (!data) {
    throw 'Must include data.'
  }

  return yield call([this.client.collections, this.client.collections.add], collectionID, entryID, data);
}

export default {
  addCollectionEntry
}
