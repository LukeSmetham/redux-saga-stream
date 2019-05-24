import { call } from 'redux-saga/effects';

/*
    Can specify target feeds in opts:
    {
        targetFeeds: ['notification:luke']
    }
*/
function * add(activityID, type, data = {}, opts = {}) {
  const reactions = this.client.reactions;
  return yield call([reactions, reactions.add], type, activityID, data, opts);
}

function * delete(reactionId) {
  const reactions = this.client.reactions;
  return yield call([reactions, reactions.delete], reactionId);
}

export default {
    add,
    delete
}
