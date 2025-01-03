export const loginSwagger = {
  "/auth/login": {
    post: {
      tags: ["Login"],
      summary: "Login to the application",
      description: "Allows users to login to the application",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "arieluser@gmail.com"
                },
                password: {
                  type: "string",
                  example: "Password123@"
                }
              },
              required: ["email", "password"]
            }
          }
        }
      },
      responses: {
        200: {
          description: "Successful login",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "success"
                  },
                  message: {
                    type: "string",
                    example: "Login successful"
                  },
                  user: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "67782869d3cabb9ba70fb272"
                      },
                      username: {
                        type: "string",
                        example: "ArielUser"
                      },
                      password: {
                        type: "string",
                        example:
                          "$2b$10$wJTasfES.3E6DuKv.OeVq.HI8QuQwvSAUKtfXFda/Nni55wY1rIia"
                      },
                      role: {
                        type: "string",
                        example: "user"
                      },
                      email: {
                        type: "string",
                        example: "arieluser@gmail.com"
                      },
                      createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-01-03T18:11:53.336Z"
                      },
                      updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2025-01-03T18:11:53.336Z"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Invalid credentials or request",
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
                    example: "Invalid credentials"
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
                    example: "An unexpected error occurred"
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
