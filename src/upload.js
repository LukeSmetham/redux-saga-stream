/*
    WEB: input.files[0]
    RN: imageURI or fileURI
*/

function * uploadFile(file) {
    const files = this.client.files;
    return yield call([files, files.upload], file);
}

function * uploadImage(image) {
    const images = this.client.images;
    return yield call([images, images.upload], image);
}

export default {
    uploadFile,
    uploadImage,
}
