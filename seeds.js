const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

const {User, Todo, Blog, Like,} = require('./model');

const seedDb = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/todoMongoDB');
    await User.deleteMany({});
    await Todo.deleteMany({});
    await Like.deleteMany({});
    await Blog.deleteMany({});

    const usersToCreate= [
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
        {
            username: faker.company.companyName(),
            email: faker.internet.email(),
            role: 'Employee',
        },
    ];

    // console.log(users);

    const users = await User.insertMany(usersToCreate);
    const todosToCreate = [
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
        {
            text: faker.random.word(),
            userId: users[Math.floor(Math.random()*users.length)]._id,
        },
    ];
    
    const todos = await Todo.insertMany(todosToCreate);
    // Math.floor(Math.random()*users.length);

    console.log(todos);

    const blogsToCreate = [{
    description: faker.lorem.paragraph(),
    userId: users[Math.floor(Math.random()*users.length)]._id,
   }];

   const blogs = await Blog.insertMany(blogsToCreate);

   console.log(blogs);

const employees = await User.findByRole('Employee');

employees.forEach(employee => employee.greeting());

const likesToCreate =[
    {userId: users[0]._id,},
    {userId: users[0]._id,},
    {
        userId: users[Math.floor(Math.random()*users.length)]._id,
    },
    {
        userId: users[Math.floor(Math.random()*users.length)]._id,
    },
    {
        userId: users[Math.floor(Math.random()*users.length)]._id,
    },
    {
        userId: users[Math.floor(Math.random()*users.length)]._id,
    },
    {
        userId: users[Math.floor(Math.random()*users.length)]._id,
    },
];

const [like1, like2]= await Like.insertMany(likesToCreate);
const firstBlog = blogs[0];

const updatedBlog= await Blog.findByIdAndUpdate(
    firstBlog._id,
    {
        $addToSet: {
            likeIds: [like1, like2]
        },
    },
    {new: true,}
).populate({
    path: 'likeIds',
    populate: 'userId'
});

const updatedBlogPartTwo= await Blog.findByIdAndUpdate(
    firstBlog._id,
    {
        $pull: {
            likeIds: like1._id,
        },
    },
    {new: true,}
).populate({
    path: 'likeIds',
    populate: 'userId'
});
console.log(updatedBlog.likeIds);
console.log(updatedBlogPartTwo.likeIds);

// firstBlog.likeIds.push(like1);
// firstBlog.likeIds.push(like2);

// await firstBlog.save();

console.log(firstBlog);

    process.exit(0);
};

seedDb();