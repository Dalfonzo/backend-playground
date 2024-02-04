import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { Application } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Rest  API Docs', version: '1.0.0' },
  },
  apis: ['./src/products/infra/routes/index.ts', './src/shared/infra/database/sequelize/models/product.model.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

// Function to setup our docs
export const swaggerDocs = (app: Application) => {
  // Route-Handler to visit our docs
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
