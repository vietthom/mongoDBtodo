const {Schema, model}= require('mongoose');

const todoSchema = new Schema({
    userId: {
        //objectID type
        type: Schema.Types.ObjectId,
        //Ref means which collection does this object ID reference
        ref: 'User',
    },
    text:{
        type: String,
        required: true,
    },
    completed: {
        type: Boolean, 
        default: false,
    }
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;
