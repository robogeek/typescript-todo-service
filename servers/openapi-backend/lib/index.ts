

import 'source-map-support/register';
import OpenAPIBackend from 'openapi-backend';
import Express from 'express';
import morgan from 'morgan';

import type { Request } from 'openapi-backend';

const app = Express();
app.use(Express.json());


// create api with your definition file or object
const api = new OpenAPIBackend({ 
    definition: '../../todo.yml',
});

// register your framework specific request handlers here
api.register({
    createTodo: (c, req, res) => {
        return res.status(200).json({
            operationId: `createTodo`,
            method: c.request.method,
            path: c.request.path,
            params: c.request.params,
            headers: c.request.headers,
            query: c.request.query,
            body: c.request.body,
            requestBody: c.request.requestBody,
            result: 'ok'
        });
    },
    listTodos: (c, req, res) => {
        return res.status(200).json({
            operationId: `listTodos`,
            method: c.request.method,
            path: c.request.path,
            params: c.request.params,
            headers: c.request.headers,
            query: c.request.query,
            body: c.request.body,
            requestBody: c.request.requestBody,
            result: 'ok'
        });
    },
    getTodoById: (c, req, res) => {
        return res.status(200).json({
            operationId: `getTodoById`,
            method: c.request.method,
            path: c.request.path,
            params: c.request.params,
            headers: c.request.headers,
            query: c.request.query,
            body: c.request.body,
            requestBody: c.request.requestBody,
            result: 'ok'
        });
    },
    patchTodoById: (c, req, res) => {
        return res.status(200).json({
            operationId: `patchTodoById`,
            method: c.request.method,
            path: c.request.path,
            params: c.request.params,
            headers: c.request.headers,
            query: c.request.query,
            body: c.request.body,
            requestBody: c.request.requestBody,
            result: 'ok'
        });
    },
    deleteTodo: (c, req, res) => {
        return res.status(200).json({
            operationId: `deleteTodo`,
            method: c.request.method,
            path: c.request.path,
            params: c.request.params,
            headers: c.request.headers,
            query: c.request.query,
            body: c.request.body,
            requestBody: c.request.requestBody,
            result: 'ok' 
        });
    },
    validationFail: (c, req, res) => res.status(400).json({ err: c.validation.errors }),
    notFound: (c, req, res) => res.status(404).json({ err: 'not found' }),
});

// initalize the backend
api.init();


// logging
app.use(morgan('combined'));

// use as express middleware
app.use((req, res) => api.handleRequest(req as Request, req, res));

// start server
app.listen(9000, () => console.info('api listening at http://localhost:9000'));

