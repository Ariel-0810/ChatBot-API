module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',  // Usar babel-jest para los archivos .js y .ts
    },
    testEnvironment: 'node',   // Usar el entorno adecuado para pruebas de Node.js
    transformIgnorePatterns: [
      '/node_modules/(?!your-esm-package)/',  // Excluir paquetes específicos de node_modules si usas ESM
    ],
    testTimeout: 1000000,
  };
  