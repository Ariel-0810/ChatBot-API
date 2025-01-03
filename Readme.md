# Template Shushi ChatBotIA 1.0


## Guía para iniciar el proyecto

Aquí están los comandos que necesitas para iniciar tu proyecto. Asegúrate de tener instalado Node.js la versión 18.20.5 o superior y NPM en tu sistema antes de ejecutar estos comandos.

```bash
# Instala las dependencias del proyecto
npm install

# Inicia el servidor de desarrollo
npm run dev
```

## Inicialización de la Base de Datos MongoDB

Para cargar los datos iniciales en la base de datos, sigue estos pasos:

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Configura las variables de entorno necesarias para la conexión a la base de datos. Puedes hacerlo creando un archivo `.env` en la raíz del proyecto con el siguiente contenido:

   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/your_database_name
   PORT=3001
   JWT_SECRET=your_secret_key
   ```

3. Asegúrate de que el archivo `data.json` con los datos de los productos esté en la raíz del proyecto.


4. Ejecuta el script de inicialización:
    
   ```
   node initDB.js
   ```
5. Verifica en la consola que el script se ha ejecutado correctamente y que los datos se han insertado en la base de datos.

Nota: Este script cargará los productos desde el archivo `data.json` y creará usuarios de ejemplo. Asegúrate de que el archivo JSON esté correctamente formateado y contenga los datos que deseas cargar.

Importante: No ejecutes este script en una base de datos de producción que ya contenga datos, ya que podría duplicar o eliminar información.

6. Ruta para ver los endpoints en SWAGGER
   Una vez tengas el servidor online en tu local, ingresa a este link:

   ```
   http://localhost:3001/api-docs
   ```
