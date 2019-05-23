import stream from 'getstream';

// Modules //
import feed from './feed';
import collections from './collections';
import currentUser from './currentUser';
import reactions from './reactions';
import upload from './upload';
import user from './user';

class ReduxSagaStream {

    constructor(key, token, id) {

        this.client = stream.connect(key, token, id);

        this.feed = {
            addActivity: feed.addActivity.bind(this),
            channel: feed.channel.bind(this),
            follow: feed.follow.bind(this),
            following: feed.following.bind(this),
            get: feed.get.bind(this),
            getActivityDetail: feed.getActivityDetail.bind(this),
            unfollow: feed.unfollow.bind(this),
        }

        this.collections = {
            add: collections.addCollectionEntry.bind(this),
        }

        this.currentUser = {
            get: currentUser.getCurrentUser.bind(this),
        }

        this.reactions = {
            add: reactions.add.bind(this),
        }

        this.upload = {
            file: upload.uploadFile.bind(this),
            image: upload.uploadImage.bind(this),
        }

        this.user = {
            getProfile: user.getProfile.bind(this),
        }
    }

}

export default ReduxSagaStream;
