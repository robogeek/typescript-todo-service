/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create a TODO
*
* todoPost TodoPost Parameters for creating a TODO (optional)
* no response value expected for this operation
* */
const createTodo = ({ todoPost }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        todoPost,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a TODO
* 
*
* id String TODO id to delete
* no response value expected for this operation
* */
const deleteTodo = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find TODO by ID
* Returns a single TODO
*
* id String ID of Todo to return
* returns Todo
* */
const getTodoById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* List all TODO items
* 
*
* returns List
* */
const listTodos = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update an existing TODO
*
* id String TODO id to delete
* todoPatch TodoPatch  (optional)
* no response value expected for this operation
* */
const patchTodoById = ({ id, todoPatch }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        todoPatch,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createTodo,
  deleteTodo,
  getTodoById,
  listTodos,
  patchTodoById,
};
