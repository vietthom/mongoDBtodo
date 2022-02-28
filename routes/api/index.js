const router = require('express').Router();
const userRoutes= require('./user');
const todoRoutes= require('./todo')

router.use('/users', userRoutes);
router.use('/todos', todoRoutes);
module.exports = router;