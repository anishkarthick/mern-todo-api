import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodo,
  toggleTodo,
  updateTodo,
} from "../controller/todoController.js";
const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getAllTodo);
route.get("/todos/:id", toggleTodo);
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
