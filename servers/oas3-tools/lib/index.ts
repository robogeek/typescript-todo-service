import * as path from 'path';
const http = require('http');

import * as oas3Tools from 'oas3-tools';

const serverPort = 8080;

/* function validate(request, scopes, schema) {
    // security stuff here
    return true;
} */

// swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
    logging: {
        format: 'combined',
        errorLimit: 400
    },
    swaggerUI: {
        apiDocsPath: '../todo.yml',
        swaggerUIPath: '/docs',
        swaggerUiDir: '/docs'
    },
    openApiValidator: {
        apiSpec: '../todo.yml',

        validateSecurity: {
            /* handlers: {
                petstore_auth: validate,
                api_key: validate
            } */
        }
    }
}; 


const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, '../todo.yml'), options);
const app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});
