export const config = {
  host: "localhost",
  port: 8081,
  swagger: {
    swaggerDefinition: {
      info: {
        title: "Meme-ory",
        version: "1.0.0",
        description: "Test Express API with autogenerated swagger doc",
      },
    },
    apis: ["server.js"],
  },
};
