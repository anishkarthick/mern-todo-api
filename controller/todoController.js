import Todo from "../model/Todo.js";

export const addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getAllTodo = async (request, response) => {
  try {
    const listAllTodo = await Todo.find({}).sort({ createdAt: -1 });

    return response.status(200).json(listAllTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const toggleTodo = async (request, response) => {
  try {
    const todoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findOneAndUpdate(
      {
        _id: request.params.id,
      },
      { done: !todoRef.done }
    );

    await todo.save();

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const updateTodo = async (request, response) => {
  try {
    await Todo.findOneAndUpdate(
      {
        _id: request.params.id,
      },
      { data: request.body.data }
    );

    const todo = await Todo.findById(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteTodo = async (request, response) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: request.params.id,
    });

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
