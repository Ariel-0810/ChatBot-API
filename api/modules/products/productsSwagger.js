// swaggerDocs.js

export const getAllProductsSwagger = {
  "/product/getAllProducts": {
    get: {
      tags: ["Product"],
      summary: "Retrieve all products",
      description: "Fetches all products from the database with their details.",
      responses: {
        200: {
          description: "Successful response with product data",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success"
                  },
                  result: {
                    type: "boolean",
                    example: true
                  },
                  products: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "6776fac1d49ad6ac0ba041df"
                        },
                        name: {
                          type: "string",
                          example: "Sushi de salmón"
                        },
                        description: {
                          type: "string",
                          example: "Delicioso sushi de salmón fresco"
                        },
                        price: {
                          type: "number",
                          format: "float",
                          example: 12.99
                        },
                        category: {
                          type: "string",
                          example: "sushi"
                        },
                        ingredients: {
                          type: "array",
                          items: ["salmón", "arroz", "alga nori"]
                        },
                        image: {
                          type: "string",
                          example: "https://example.com/sushi-salmon.jpg"
                        },
                        availability: {
                          type: "boolean",
                          example: true
                        },
                        createdAt: {
                          type: "string",
                          format: "date-time",
                          example: "2025-01-02T20:44:49.427Z"
                        },
                        updatedAt: {
                          type: "string",
                          format: "date-time",
                          example: "2025-01-02T20:44:49.427Z"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Invalid request or error fetching products",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "error"
                  },
                  message: {
                    type: "string",
                    example: "Error fetching products"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const getProductSwagger = {
  "/product/getProduct/{productId}": {
    get: {
      tags: ["Product"],
      summary: "Retrieve product by ID",
      description: "Fetches a product by their unique ID.",
      parameters: [
        {
          name: "productId",
          in: "path",
          required: true,
          description: "Unique identifier of the product",
          schema: {
            type: "string",
            example: "6776fac1d49ad6ac0ba041df"
          }
        }
      ],
      responses: {
        200: {
          description: "Successful response with product data",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success"
                  },
                  result: {
                    type: "boolean",
                    example: true
                  },
                  product: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6776fac1d49ad6ac0ba041df"
                      },
                      name: {
                        type: "string",
                        example: "Sushi de salmón"
                      },
                      description: {
                        type: "string",
                        example: "Delicioso sushi de salmón fresco"
                      },
                      price: {
                        type: "number",
                        format: "float",
                        example: 12.99
                      },
                      category: {
                        type: "string",
                        example: "sushi"
                      },
                      ingredients: {
                        type: "array",
                        items: ["salmón", "arroz", "alga nori"]
                      },
                      image: {
                        type: "string",
                        example: "https://example.com/sushi-salmon.jpg"
                      },
                      availability: {
                        type: "boolean",
                        example: true
                      },
                      createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-01-02T20:44:49.427Z"
                      },
                      updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-01-02T20:44:49.427Z"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Invalid productId or product not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "error"
                  },
                  message: {
                    type: "string",
                    example: "Product not found"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const createProductSwagger = {
  "/product/createUser": {
    post: {
      tags: ["Product"],
      summary: "Create a new product",
      description: "Endpoint to create a new product with the provided data.",
      requestBody: {
        description: "Product data to create a new product",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                objectData: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "Postre mochi de matcha"
                    },
                    description: {
                      type: "string",
                      example: "Delicioso sushi de salmón fresco"
                    },
                    price: {
                      type: "number",
                      format: "float",
                      example: 12.99
                    },
                    category: {
                      type: "string",
                      example: "sushi"
                    },
                    ingredients: {
                      type: "array",
                      items: ["salmón", "arroz", "alga nori"]
                    },
                    image: {
                      type: "string",
                      example: "https://example.com/sushi-salmon.jpg"
                    }
                  }
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: "Product created successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success"
                  },
                  result: {
                    type: "boolean",
                    example: true
                  },
                  product: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6776fac1d49ad6ac0ba041df"
                      },
                      name: {
                        type: "string",
                        example: "Sushi de salmón"
                      },
                      description: {
                        type: "string",
                        example: "Delicioso sushi de salmón fresco"
                      },
                      price: {
                        type: "number",
                        format: "float",
                        example: 12.99
                      },
                      category: {
                        type: "string",
                        example: "sushi"
                      },
                      ingredients: {
                        type: "array",
                        items: ["salmón", "arroz", "alga nori"]
                      },
                      image: {
                        type: "string",
                        example: "https://example.com/sushi-salmon.jpg"
                      },
                      availability: {
                        type: "boolean",
                        example: true
                      },
                      createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-01-02T16:35:04.174Z"
                      },
                      updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-01-02T16:35:04.174Z"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Bad Request - Invalid or missing product data",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "error"
                  },
                  message: {
                    type: "string",
                    example: "Invalid product data"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const deleteProductSwagger = {
  "/product/deleteProduct/{productId}": {
    delete: {
      tags: ["Product"],
      summary: "Delete a product by ID",
      description: "Endpoint to delete a product by their unique ID.",
      parameters: [
        {
          name: "productId",
          in: "path",
          required: true,
          description: "Unique ID of the product to delete",
          schema: {
            type: "string",
            example: "6776faa0d49ad6ac0ba041dc"
          }
        }
      ],
      responses: {
        200: {
          description: "Product deleted successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success"
                  },
                  result: {
                    type: "boolean",
                    example: true
                  },
                  message: {
                    type: "string",
                    example: "Product deleted successfully"
                  }
                }
              }
            }
          }
        },
        404: {
          description: "Product not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "error"
                  },
                  message: {
                    type: "string",
                    example: "Product not found"
                  }
                }
              }
            }
          }
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "error"
                  },
                  message: {
                    type: "string",
                    example: "An error occurred while deleting the product"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const updateProductSwagger = {
  "/product/updateProduct/{productId}": {
    put: {
      tags: ["Product"],
      summary: "Update a product by ID",
      description: "Endpoint to update product details by their unique ID.",
      parameters: [
        {
          name: "productId",
          in: "path",
          required: true,
          description: "Unique ID of the product to update",
          schema: {
            type: "string",
            example: "6777009ebf5821de5dcdb45f"
          }
        }
      ],
      requestBody: {
        description: "Object containing the updated product data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                updateData: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "Nombre_actualizado"
                    }
                  },
                  additionalProperties: false
                }
              },
              required: ["updateData"]
            }
          }
        }
      },
      responses: {
        200: {
          description: "Product updated successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success"
                  },
                  result: {
                    type: "boolean",
                    example: true
                  },
                  product: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6777009ebf5821de5dcdb45f"
                      },
                      name: {
                        type: "string",
                        example: "Nombre_actualizado"
                      },
                      description: {
                        type: "string",
                        example: "Delicioso sushi de salmón fresco"
                      },
                      price: {
                        type: "number",
                        format: "float",
                        example: 12.99
                      },
                      category: {
                        type: "string",
                        example: "sushi"
                      },
                      ingredients: {
                        type: "array",
                        items: ["salmón", "arroz", "alga nori"]
                      },
                      image: {
                        type: "string",
                        example: "https://example.com/sushi-salmon.jpg"
                      },
                      availability: {
                        type: "boolean",
                        example: true
                      },
                      createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-01-02T16:35:04.174Z"
                      },
                      updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-01-02T16:35:04.174Z"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Invalid input",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "string", example: "error" },
                  message: {
                    type: "string",
                    example: "Invalid product data provided"
                  }
                }
              }
            }
          }
        },
        404: {
          description: "Product not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "string", example: "error" },
                  message: { type: "string", example: "Product not found" }
                }
              }
            }
          }
        },
        500: {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "string", example: "error" },
                  message: {
                    type: "string",
                    example: "An error occurred while updating the product"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
