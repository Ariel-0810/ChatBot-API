import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { getRegisteredTags } from './swaggerTags.js';
import * as User from '../../api/modules/users/userSwagger.js';
import * as Product from '../../api/modules/products/productsSwagger.js';
import * as Order from '../../api/modules/orders/ordersSwagger.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3001


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Sushi ChatBotIA',
      version: '1.0.0',
      description: 'Esta API permite gestionar usuarios e interactuar con un ChatBot para hacer pedidos de Sushi'
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Main Server'
      }
    ],
    tags: getRegisteredTags()
  },
  apis: ['./src/api/modules/**/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

const addSwaggerPaths = (spec, ...definitions) => {
  definitions.forEach(definition => {
    Object.keys(definition).forEach(key => {
      const pathDefinitions = definition[key];
      Object.keys(pathDefinitions).forEach(path => {
        const methods = pathDefinitions[path];
        if (!spec.paths[path]) {
          spec.paths[path] = {};
        }
        Object.keys(methods).forEach(method => {
          spec.paths[path][method] = methods[method];
        });
      });
    });
  });
};

addSwaggerPaths(swaggerSpec, User, Product, Order);

swaggerSpec.paths['/auth/login'] = {
  post: {
    tags: ['User'],
    summary: 'Login',
    description: 'Login to the application',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              username: { type: 'string' },
              password: { type: 'string' }
            },
            required: ['username', 'password']
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Successful login',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                sessionToken: { type: 'string' }
              }
            }
          }
        }
      },
      401: {
        description: 'Invalid credentials'
      }
    }
  }
};

export const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};