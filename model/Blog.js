const {Schema, model}= require('mongoose');

const blogSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }, 
    description: String, 
    likeIds: [
        { type: Schema.Types.ObjectId, 
        ref: 'Like', 
        }
    ],
});

const Blog = model('Blog', blogSchema);

module.exports = Blog;