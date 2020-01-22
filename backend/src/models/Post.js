const mongoose = require('mongoose');

const aws = require('aws-sdk')
const s3 = new aws.S3();

const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key : String,
    url : String,
    createAt: {
        type: Date,
        default: Date.now
    },

})

PostSchema.pre('save', function() {
    if(!this.url) {
        this.url = `${process.env.APP_URL}/files/${ this.key }`
    }
})

PostSchema.pre('remove', function() {
    if(process.env.STORAGE_TYPE == 's3') {
        return s3.deleteObject({
            Bucket: 'upload-images-s3',
            Key: this.key,
        }).promise();
    }
})

module.exports = mongoose.model('Post', PostSchema);