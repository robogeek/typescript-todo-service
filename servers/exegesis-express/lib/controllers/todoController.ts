
import * as util from 'util';

export function createTodo(context) {
    // const name = context.params.query.name;
    return { message: `Hello createTodo ${util.inspect(context.params)}` };
}

export function listTodos(context) {
    // const name = context.params.query.name;
    return { message: `Hello listTodos ${util.inspect(context.params)}` };
}

export function getTodoById(context) {
    // const name = context.params.query.name;
    return { message: `Hello getTodoById ${util.inspect(context.params)}` };
}

export function patchTodoById(context) {
    // const name = context.params.query.name;
    return { message: `Hello patchTodoById ${util.inspect(context.params)}` };
}

export function deleteTodo(context) {
    // const name = context.params.query.name;
    return { message: `Hello deleteTodo ${util.inspect(context.params)}` };
}
        