import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { getRegisteredTags } from './src/swagger/swaggerTags.js';  // Asegúrate de tener tu archivo de tags
import * as User from './api/modules/users/userSwagger.js';  // Importa tu archivo de rutas de usuarios
import * as Product from './api/modules/products/productsSwagger.js';  // Importa tu archivo de rutas de usuarios
import * as Order from './api/modules/orders/ordersSwagger.js';  // Importa tu archivo de rutas de usuarios

// Otras configuraciones
const port = process.env.PORT || 3001;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Sushi ChatBotIA',
      version: '1.0.0',
      description: 'Esta API permite gestionar usuarios e interactuar con un ChatBot para hacer pedidos de Sushi',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Main Server',
      }
    ],
    tags: getRegisteredTags(),  // Asegúrate de que las etiquetas están registradas correctamente
  },
  apis: ['./src/api/modules/**/*.js'],  // Asegúrate de que las rutas estén configuradas correctamente
};

// Genera el objeto swaggerSpec usando swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Función para agregar rutas al swaggerSpec
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

// Aquí agregas las rutas de los usuarios a tu especificación
addSwaggerPaths(swaggerSpec, User, Product, Order);

// Exporta la configuración para usarla en tu servidor
export const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
