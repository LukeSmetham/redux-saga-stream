import getstream from 'getstream';

// Modules //
import feed from './feed';

class ReduxSagaStream {

  constructor(key, token, id) {

    this.client = stream.connect(key, token, id);

    this.feed = {
      channel: feed.channel.bind(this),
    }
  }

}

export default ReduxSagaStream;
