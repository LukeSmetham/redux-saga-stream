import { eventChannel, END } from 'redux-saga';

export function * addActivity(feedGroup, feedID, postData) {
  const feed = client.feed(feedGroup, spaceID);
  return yield call(feed.addActivity, postData);
}

export function createFeedChannel(feedGroup, feedID) {
  const feed = client.feed(feedGroup, spaceID);

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
