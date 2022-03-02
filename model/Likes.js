const {Schema, model}= require('mongoose');

const likeSchema = new Schema({ 
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Like = model('Like', likeSchema);

module.exports = Like;