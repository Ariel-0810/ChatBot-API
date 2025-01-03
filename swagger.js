import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { getRegisteredTags } from "./src/swagger/swaggerTags.js";
import * as User from "./api/modules/users/userSwagger.js";
import * as Product from "./api/modules/products/productsSwagger.js";
import * as Order from "./api/modules/orders/ordersSwagger.js";
import * as Login from "./api/modules/auth/authSwagger.js";

const port = process.env.PORT || 3001;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Sushi ChatBotIA",
      version: "1.0.0",
      description:
        "Esta API permite gestionar usuarios e interactuar con un ChatBot para hacer pedidos de Sushi"
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: "Main Server"
      }
    ],
    tags: getRegisteredTags()
  },
  apis: ["./src/api/modules/**/*.js", "./src/api/modules/auth/**/*.js"]
};

// Genera el objeto swaggerSpec usando swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// Función para agregar rutas al swaggerSpec
const addSwaggerPaths = (spec, ...definitions) => {
  definitions.forEach((definition) => {
    Object.keys(definition).forEach((key) => {
      const pathDefinitions = definition[key];
      Object.keys(pathDefinitions).forEach((path) => {
        const methods = pathDefinitions[path];
        if (!spec.paths[path]) {
          spec.paths[path] = {};
        }
        Object.keys(methods).forEach((method) => {
          spec.paths[path][method] = methods[method];
        });
      });
    });
  });
};

// Aquí agregas las rutas de los usuarios a tu especificación
addSwaggerPaths(swaggerSpec, User, Product, Order, Login);

// Exporta la configuración para usarla en tu servidor
export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
