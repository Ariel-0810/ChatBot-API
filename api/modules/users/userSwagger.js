// swaggerDocs.js

export const getAllUsersSwagger = {
  "/users/getAllUsers": {
    get: {
      tags: ["User"],
      summary: "Retrieve all users",
      description: "Fetches all users from the database with their details.",
      responses: {
        200: {
          description: "Successful response with user data",
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
                  users: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "6776fac1d49ad6ac0ba041df"
                        },
                        username: {
                          type: "string",
                          example: "usuarioTest"
                        },
                        password: {
                          type: "string",
                          example:
                            "$2a$10$oNDpxo5r849QryC4trQMA.5kocfG/SnB0xJZFyUIatlfP3RuEvfFq"
                        },
                        email: {
                          type: "string",
                          example: "email@gmail.com"
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
          description: "Invalid request or error fetching users",
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
                    example: "Error fetching users"
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

export const getUserByIdSwagger = {
  "/users/getUserById/{userId}": {
    get: {
      tags: ["User"],
      summary: "Retrieve user by ID",
      description: "Fetches a user by their unique ID.",
      parameters: [
        {
          name: "userId",
          in: "path",
          required: true,
          description: "Unique identifier of the user",
          schema: {
            type: "string",
            example: "6776fac1d49ad6ac0ba041df"
          }
        }
      ],
      responses: {
        200: {
          description: "Successful response with user data",
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
                  user: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6776fac1d49ad6ac0ba041df"
                      },
                      username: {
                        type: "string",
                        example: "usuarioTest"
                      },
                      password: {
                        type: "string",
                        example:
                          "$2a$10$oNDpxo5r849QryC4trQMA.5kocfG/SnB0xJZFyUIatlfP3RuEvfFq"
                      },
                      email: {
                        type: "string",
                        example: "email@gmail.com"
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
          description: "Invalid userId or user not found",
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
                    example: "User not found"
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

export const createUserSwagger = {
  "/users/createUser": {
    post: {
      tags: ["User"],
      summary: "Create a new user",
      description: "Endpoint to create a new user with the provided data.",
      requestBody: {
        description: "User data to create a new account",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                objectData: {
                  type: "object",
                  properties: {
                    username: {
                      type: "string",
                      example: "homer_simpson"
                    },
                    password: {
                      type: "string",
                      example: "Doh12345@"
                    },
                    email: {
                      type: "string",
                      example: "homer.simpson@springfield.com"
                    }
                  },
                  required: ["username", "password", "email"]
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: "User created successfully",
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
                  user: {
                    type: "object",
                    properties: {
                      username: {
                        type: "string",
                        example: "UsuarioTest"
                      },
                      password: {
                        type: "string",
                        example:
                          "$2a$10$1R9IY99p7npNnWY2fZaZ4eC1xiwF0Fa/he0mY6.47xZqnmhSE3Ham"
                      },
                      email: {
                        type: "string",
                        example: "example@example.com"
                      },
                      _id: {
                        type: "string",
                        example: "6776c03831357961bc65947c"
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
          description: "Bad Request - Invalid or missing user data",
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
                    example: "Invalid user data"
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

export const deleteUserSwagger = {
  "/users/deleteUser/{userId}": {
    delete: {
      tags: ["User"],
      summary: "Delete a user by ID",
      description: "Endpoint to delete a user by their unique ID.",
      parameters: [
        {
          name: "userId",
          in: "path",
          required: true,
          description: "Unique ID of the user to delete",
          schema: {
            type: "string",
            example: "6776faa0d49ad6ac0ba041dc"
          }
        }
      ],
      responses: {
        200: {
          description: "User deleted successfully",
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
                    example: "User deleted successfully"
                  }
                }
              }
            }
          }
        },
        404: {
          description: "User not found",
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
                    example: "User not found"
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
                    example: "An error occurred while deleting the user"
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

export const updateUserSwagger = {
  "/users/updateUser/{userId}": {
    put: {
      tags: ["User"],
      summary: "Update a user by ID",
      description: "Endpoint to update user details by their unique ID.",
      parameters: [
        {
          name: "userId",
          in: "path",
          required: true,
          description: "Unique ID of the user to update",
          schema: {
            type: "string",
            example: "6777009ebf5821de5dcdb45f"
          }
        }
      ],
      requestBody: {
        description: "Object containing the updated user data",
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                objectData: {
                  type: "object",
                  properties: {
                    username: {
                      type: "string",
                      example: "Nombre_actualizado"
                    },
                    email: {
                      type: "string",
                      example: "nuevo.email@example.com"
                    },
                    password: {
                      type: "string",
                      example: "NewPassword123@"
                    }
                  },
                  additionalProperties: false
                }
              },
              required: ["objectData"]
            }
          }
        }
      },
      responses: {
        200: {
          description: "User updated successfully",
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
                  updatedUser: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6777009ebf5821de5dcdb45f"
                      },
                      username: {
                        type: "string",
                        example: "UsuarioTestActualizado"
                      },
                      password: {
                        type: "string",
                        example: "$2a$10$oNDpxo5r849Qry..."
                      },
                      email: { type: "string", example: "email@gmail.com" },
                      createdAt: {
                        type: "string",
                        example: "2025-01-02T20:44:49.427Z"
                      },
                      updatedAt: {
                        type: "string",
                        example: "2025-01-03T14:44:49.670Z"
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
                    example: "Invalid user data provided"
                  }
                }
              }
            }
          }
        },
        404: {
          description: "User not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: { type: "string", example: "error" },
                  message: { type: "string", example: "User not found" }
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
                    example: "An error occurred while updating the user"
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
