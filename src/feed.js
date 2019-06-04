import { eventChannel, END } from 'redux-saga';
import { call } from 'redux-saga/effects';

function * addActivity(feedGroup, feedID, postData) {
  const feed = this.client.feed(feedGroup, feedID);
  return yield call([feed, feed.addActivity], postData);
}

function channel(feedGroup, feedID) {
  const feed = this.client.feed(feedGroup, feedID);

  return eventChannel(emit => {
    const subscription = feed.subscribe(emit);
    subscription
      .then(() => {
        console.log('listening realtime on', `${ feedGroup }:${ feedID }`)
      }, (err) => {
        console.log(err)
        emit(END)
      })
    return () => {
      console.log('closing realtime on', `${ feedGroup }:${ feedID }`)
      subscription.cancel()
    }
  })
}

/*
* Remove an activity
*
* toRemove can be an activity ID, or an object containing
* foreignId
*/
function * removeActivity(feedGroup, feedID, toRemove) {
    const feed = this.client.feed(feedGroup, feedID);
    return yield call([feed, feed.removeActivity], toRemove);
}

function * follow(feedGroup, feedID, followGroup, followID) {
    const feed = this.client.feed(feedGroup, feedID);
    return yield call([feed, feed.follow], followGroup, followID)
}

/*
* Unfollow a feed
*/
function * unfollow(feedGroup, feedID, followGroup, followID) {
    const feed = this.client.feed(feedGroup, feedID);
    return yield call([feed, feed.unfollow], followGroup, followID)
}

function * following(feedGroup, feedID, opts = {}) {
    const feed = this.client.feed(feedGroup, feedID);
    return yield call([feed, feed.following], opts);
}

function * get(feedGroup, feedID, opts = {}) {
  const feed = this.client.feed(feedGroup, feedID);
  return yield call([feed, feed.get], opts)
}

function * getActivityDetail(feedGroup, feedID, activityID, opts = {}) {
    const feed = this.client.feed(feedGroup, feedID);
    return yield call([feed, feed.getActivityDetail], activityID, opts)
}

export default {
  addActivity,
  channel,
  follow,
  following,
  get,
  getActivityDetail,
  removeActivity,
  unfollow,
}
