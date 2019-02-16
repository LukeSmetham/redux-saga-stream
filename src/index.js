import getstream from 'getstream';

// Modules //
import feed from './feed';
import collections from './collections';

class ReduxSagaStream {

  constructor(key, token, id) {

    this.client = getstream.connect(key, token, id);

    this.feed = {
      addActivity: feed.addActivity.bind(this),
      channel: feed.channel.bind(this),
      get: feed.get.bind(this),
    }

    this.collections = {
      add: collections.addCollectionEntry.bind(this),
    }
  }

}

export default ReduxSagaStream;
