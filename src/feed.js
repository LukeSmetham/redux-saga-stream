import { eventChannel, END } from 'redux-saga';
import { call } from 'redux-saga/effects';

function * addActivity(feedGroup, feedID, postData) {
  const feed = this.client.feed(feedGroup, feedID);
  return yield call([feed, feed.addActivity], postData);
}

function createFeedChannel(feedGroup, feedID) {
  const feed = this.client.feed(feedGroup, spaceID);

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

export default {
  addActivity,
  createFeedChannel,
}
