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

function * follow(feedGroup, feedID, followGroup, followID) {
    const feed = this.client.feed(feedGroup, feedID);
    return yield call([feed, feed.follow], followGroup, followID)
}

function * get(feedGroup, feedID, opts = {}) {
  const feed = this.client.feed(feedGroup, feedID, this.userToken);
  return yield call([feed, feed.get], opts)
}

export default {
  addActivity,
  channel,
  follow,
  get,
}
