const router = require('express').Router();
const {getAllTodo, createTodo, getTodoById, updateTodoById, deleteTodoById} = require('../../../controller/todoController');

router.route('/')
    .get(getAllTodo)
    .post(createTodo);

router.route('/:todoId')
    .delete(deleteTodoById)
    .put(updateTodoById)
    .get(getTodoById);



module.exports = router;

