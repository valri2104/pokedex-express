const BUCKET_NAME = process.env.GCP_BUCKET_NAME || 'mi-bucket-pokeneas';

function imageUrl(filename) {
    return `https://storage.googleapis.com/${BUCKET_NAME}/${filename}`;
}

module.exports = { imageUrl };
