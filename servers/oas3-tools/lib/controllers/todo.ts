
import * as util from 'util';

export function createTodo (req, res, next, body) {
    // const name = context.params.query.name;
    return { message: `Hello createTodo ${util.inspect(context.params)}` };
}

export function listTodos (req, res, next) {
    // const name = context.params.query.name;
    return { message: `Hello listTodos ${util.inspect(context.params)}` };
}

export function getTodoById (req, res, next, id) {
    // const name = context.params.query.name;
    return { message: `Hello getTodoById ${util.inspect(context.params)}` };
}

export function patchTodoById (req, res, next, body, id) {
    // const name = context.params.query.name;
    return { message: `Hello patchTodoById ${util.inspect(context.params)}` };
}

export function deleteTodo (req, res, next, id) {
    // const name = context.params.query.name;
    return { message: `Hello deleteTodo ${util.inspect(context.params)}` };
}
        