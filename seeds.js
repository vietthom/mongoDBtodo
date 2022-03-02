const mongoose = require('mongoose');

const {User, Todo} = require('./model');

const seedDb = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
    await User.deleteMany({});
    await Todo.deleteMany({});

    process.exit(0);
};

seedDb();