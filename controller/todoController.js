const {Todo}= require('../model');

module.exports= {
    getAllTodo: async (req, res) => {
    try {
        const getTodo = await Todo.find().populate({
            path: 'userId', 
            select: '-role -powerLevel -email -hobbies'
        });
        res.json(getTodo);
    } catch (e) {
        res.json(e);
    }
},
    createTodo: async (req, res) => {
        const {text, userId} = req.body;
        try {
            const newTodo = await Todo.create({text, userId});
            res.json(newTodo);
        } catch (e) {
            res.json(e)
        }
    },
    getTodoById: async (req, res) => {
        const {todoId} = req.params;
        try {
            const todo = await Todo.findById(todoId);
            res.json(todo);
        } catch (e) {
            res.json(e);
        }
    }, 
    updateTodoById: async (req, res) => {
        const {todoId} = req.params;
        try {
            const updatedTodo = await Todo.findByIdAndUpdate(todoId, 
                {...req.body}, 
                {
                    new: true,
                }, );
            res.json(updatedTodo);
        } catch (e) {
            res.json(e);
        }
    }, 
    deleteTodoById: async (req, res)=>{
        const {todoId} = req.params;
        try {
            const deletedTodo = await User.findByIdAndDelete(todoId);
            res.json(deletedTodo);
        } catch (e) {
            res.json(e);
        }
    },
}