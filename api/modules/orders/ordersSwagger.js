// swaggerDocs.js

export const getAllOrdersSwagger = {
  "/order/getAllOrders": {
    get: {
      tags: ["Order"],
      summary: "Retrieve all orders",
      description: "Fetches all orders from the database with their details.",
      responses: {
        200: {
          description: "Successful response with order data",
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
                        userId: {
                          type: "string",
                          example: "676f138f7997e89763db9598"
                        },
                        items: {
                          type: "string",
                          example: [
                            {
                              name: "California Roll",
                              quantity: 2,
                              price: 9.99,
                              _id: "6770dc73f67530265c085240"
                            },
                            {
                              name: "Sushi de atún",
                              quantity: 1,
                              price: 13.99,
                              _id: "6770dc73f67530265c085241"
                            }
                          ]
                        },
                        totalPrice: {
                          type: "number",
                          format: "float",
                          example: 12.99
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
          description: "Invalid request or error fetching orders",
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
                    example: "Error fetching orders"
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

export const getOrderSwagger = {
  "/order/getOrder/{orderId}": {
    get: {
      tags: ["Order"],
      summary: "Retrieve order by ID",
      description: "Fetches a order by their unique ID.",
      parameters: [
        {
          name: "orderId",
          in: "path",
          required: true,
          description: "Unique identifier of the order",
          schema: {
            type: "string",
            example: "6776fac1d49ad6ac0ba041df"
          }
        }
      ],
      responses: {
        200: {
          description: "Successful response with order data",
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
                  order: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6776fac1d49ad6ac0ba041df"
                      },
                      userId: {
                        type: "string",
                        example: "676f138f7997e89763db9598"
                      },
                      items: {
                        type: "string",
                        example: [
                          {
                            name: "California Roll",
                            quantity: 2,
                            price: 9.99,
                            _id: "6770dc73f67530265c085240"
                          },
                          {
                            name: "Sushi de atún",
                            quantity: 1,
                            price: 13.99,
                            _id: "6770dc73f67530265c085241"
                          }
                        ]
                      },
                      totalPrice: {
                        type: "number",
                        format: "float",
                        example: 12.99
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
          description: "Invalid orderId or order not found",
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
                    example: "Order not found"
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

export const createOrderSwagger = {
  "/order/createOrder": {
    post: {
      tags: ["Order"],
      summary: "Create a new order",
      description: "Endpoint to create a new order with the provided data.",
      requestBody: {
        description: "Order data to create a new order",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                orderDetails: {
                  type: "object",
                  properties: {
                    userId: {
                      type: "string",
                      example: "676f138f7997e89763db9598"
                    },
                    items: {
                      type: "string",
                      example: [
                        {
                          name: "California Roll",
                          quantity: 2,
                          price: 9.99,
                          _id: "6770dc73f67530265c085240"
                        },
                        {
                          name: "Sushi de atún",
                          quantity: 1,
                          price: 13.99,
                          _id: "6770dc73f67530265c085241"
                        }
                      ]
                    },
                    totalPrice: {
                      type: "number",
                      format: "float",
                      example: 12.99
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
          description: "Order created successfully",
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
                  order: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6776fac1d49ad6ac0ba041df"
                      },
                      userId: {
                        type: "string",
                        example: "676f138f7997e89763db9598"
                      },
                      items: {
                        type: "string",
                        example: [
                          {
                            name: "California Roll",
                            quantity: 2,
                            price: 9.99,
                            _id: "6770dc73f67530265c085240"
                          },
                          {
                            name: "Sushi de atún",
                            quantity: 1,
                            price: 13.99,
                            _id: "6770dc73f67530265c085241"
                          }
                        ]
                      },
                      totalPrice: {
                        type: "number",
                        format: "float",
                        example: 12.99
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
          description: "Bad Request - Invalid or missing order data",
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
                    example: "Invalid order data"
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

export const deleteOrderSwagger = {
  "/order/deleteOrder/{orderId}": {
    delete: {
      tags: ["Order"],
      summary: "Delete a order by ID",
      description: "Endpoint to delete a order by their unique ID.",
      parameters: [
        {
          name: "orderId",
          in: "path",
          required: true,
          description: "Unique ID of the order to delete",
          schema: {
            type: "string",
            example: "6776faa0d49ad6ac0ba041dc"
          }
        }
      ],
      responses: {
        200: {
          description: "Order deleted successfully",
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
                    example: "Order deleted successfully"
                  }
                }
              }
            }
          }
        },
        404: {
          description: "Order not found",
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
                    example: "Order not found"
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
                    example: "An error occurred while deleting the order"
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

export const updateOrderSwagger = {
  "/order/updateOrder/{orderId}": {
    put: {
      tags: ["Order"],
      summary: "Update a order by ID",
      description: "Endpoint to update order details by their unique ID.",
      parameters: [
        {
          name: "orderId",
          in: "path",
          required: true,
          description: "Unique ID of the order to update",
          schema: {
            type: "string",
            example: "6777009ebf5821de5dcdb45f"
          }
        }
      ],
      requestBody: {
        description: "Object containing the updated order data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                orderDetails: {
                  type: "object",
                  properties: {
                    userId: {
                      type: "string",
                      example: "676f138f7997e89763db9598"
                    },
                    items: {
                      type: "string",
                      example: [
                        {
                          name: "California Roll",
                          quantity: 2,
                          price: 9.99,
                          _id: "6770dc73f67530265c085240"
                        },
                        {
                          name: "Sushi de atún",
                          quantity: 1,
                          price: 13.99,
                          _id: "6770dc73f67530265c085241"
                        }
                      ]
                    },
                    totalPrice: {
                      type: "number",
                      format: "float",
                      example: 12.99
                    }
                  },
                  additionalProperties: false
                }
              },
              required: ["orderDetails"]
            }
          }
        }
      },
      responses: {
        200: {
          description: "Order updated successfully",
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
                      userId: {
                        type: "string",
                        example: "676f138f7997e89763db9598"
                      },
                      items: {
                        type: "string",
                        example: [
                          {
                            name: "California Roll",
                            quantity: 2,
                            price: 9.99,
                            _id: "6770dc73f67530265c085240"
                          },
                          {
                            name: "Sushi de atún",
                            quantity: 1,
                            price: 13.99,
                            _id: "6770dc73f67530265c085241"
                          }
                        ]
                      },
                      totalPrice: {
                        type: "number",
                        format: "float",
                        example: 12.99
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
                    example: "Invalid order data provided"
                  }
                }
              }
            }
          }
        },
        404: {
          description: "Order not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "string", example: "error" },
                  message: { type: "string", example: "Order not found" }
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
                    example: "An error occurred while updating the order"
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
