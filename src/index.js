import getstream from 'getstream';

// Modules //
import feed from './feed';

class ReduxSagaStream {

  constructor(key, token, id) {

    this.client = stream.connect(key, token, id);

    this.feed = {
      addActivity: feed.addActivity.bind(this),
      createFeedChannel: feed.createFeedChannel.bind(this),
    }
  }

}

export default ReduxSagaStream;
