import request from 'supertest';
import connectDB from '../../../src/config/db.js';
import { app, httpServer } from '../../../app.js';
import mongoose from 'mongoose';


describe('Product tests', () => {
  let createProductResponse;

  beforeAll(async () => {
    connectDB()
    await new Promise((resolve) => {
      httpServer.listen(3001, () => {
        resolve();
      });
    }, 30000);

    createProductResponse = await request(app)
    .post('/product/createProduct')
    .set('Content-Type', 'application/json')
    .send({
      objectData: {
        name: "Postre mochi de matcha",
        description: "Mochi suave con relleno de matcha",
        price: 6.99,
        category: "postre",
        ingredients: ["arroz glutinoso", "matcha", "azúcar"],
        image: "https://example.com/mochi-matcha.jpg"
      },
    });
  });

  describe('Create Product', () => {
    it('The response status is "success"', async () => {
      expect(createProductResponse.body.status).toBe('success');
    });
    it('The request should bring a product object', async () => {
      expect(createProductResponse.body).toHaveProperty('product');
    });

    it('The response contains a result object', async () => {
      expect(createProductResponse.body.result).toBe(true);
    });

  });

  describe('Update Product', () => {
    let updateProductResponse;
    let productId;

    beforeAll(async () => {
      if (createProductResponse.body && createProductResponse.body.product) {
        productId = createProductResponse.body.product._id;
      } else {
        throw new Error('No se recibió un product válido');
      }
      updateProductResponse = await request(app)
        .put(`/product/updateProduct/${productId}`)
        .set('Content-Type', 'application/json')
        .send({          
            updateData: {
            name: 'Postre actualizado',
          },
        });
    });

    it('The response status is "success"', async () => {
      expect(updateProductResponse.body.status).toBe('success');
    });

    it('The response should contain a product object', async () => {
      expect(updateProductResponse.body).toHaveProperty('product');
    });

    it('The response contains a result object', async () => {
      expect(updateProductResponse.body.result).toBe(true);
    });
  });

  describe('getAllProducts', () => {
    let getAllProductsResponse;

    beforeAll(async () => {
        getAllProductsResponse = await request(app)
        .get('/product/getAllProducts')
        .send();
    });

    it('should have a response status of "success"', async () => {
      expect(getAllProductsResponse.body.status).toBe('success');
    });

    it('should return an array of products', async () => {
      expect(getAllProductsResponse.body).toHaveProperty('products');
    });

    it('the response from getAllProducts should contain an array of products', async () => {
      expect(Array.isArray(getAllProductsResponse.body.products)).toBe(true);
    });
  });

  describe('getProductById', () => {
    let getProductResponse;
    let productId;
    beforeAll(async () => {
      if (createProductResponse.body && createProductResponse.body.product) {
        productId = createProductResponse.body.product._id;
      } else {
        throw new Error('No se recibió un producto válido');
      }
      getProductResponse = await request(app)
        .get(`/product/getProduct/${productId}`)
        .set('Content-Type', 'application/json')
        .send()
    });

    it('should have a response status of "success"', async () => {
      expect(getProductResponse.body.status).toBe('success');
    });

    it('should return a product object', async () => {
      expect(getProductResponse.body).toHaveProperty('product');
    });

    it('the response contains a product object', async () => {
      expect(getProductResponse.body.product).toBeInstanceOf(Object);
    });
  });

  describe('Delete product', () => {
    let deleteProductResponse;
    let productId;

    beforeAll(async () => {
      if (createProductResponse.body && createProductResponse.body.product) {
        productId = createProductResponse.body.product._id;
      } else {
        throw new Error('No se recibió un producto válido');
      }
      deleteProductResponse = await request(app)
        .delete(`/product/deleteProduct/${productId}`)
        .set('Content-Type', 'application/json')
        .send();
    });

    it('The response status is "success"', async () => {
      expect(deleteProductResponse.body.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteProductResponse.body.result).toBe(true);
    });
  });

  afterAll(async () => {
    await new Promise((resolve) => {
      mongoose.connection.close();
      httpServer.close(() => {
        console.log('Servidor cerrado');
        resolve();
      });
    });
  });
});