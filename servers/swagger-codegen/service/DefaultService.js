'use strict';


/**
 * Create a TODO
 *
 * body TodoPost Parameters for creating a TODO (optional)
 * no response value expected for this operation
 **/
exports.createTodo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a TODO
 *
 * id String TODO id to delete
 * no response value expected for this operation
 **/
exports.deleteTodo = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find TODO by ID
 * Returns a single TODO
 *
 * id String ID of Todo to return
 * returns Todo
 **/
exports.getTodoById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "id",
  "title" : "title",
  "body" : "body",
  "complete" : false,
  "precedence" : "low"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all TODO items
 *
 * returns List
 **/
exports.listTodos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "id",
  "title" : "title",
  "body" : "body",
  "complete" : false,
  "precedence" : "low"
}, {
  "id" : "id",
  "title" : "title",
  "body" : "body",
  "complete" : false,
  "precedence" : "low"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing TODO
 *
 * body TodoPatch  (optional)
 * id String TODO id to delete
 * no response value expected for this operation
 **/
exports.patchTodoById = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

