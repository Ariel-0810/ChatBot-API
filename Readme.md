# Sushi ChatBotIA 1.0

¡Bienvenido a Sushi ChatBotIA! Este es un proyecto diseñado para simplificar los pedidos de sushi mediante un chatbot interactivo. A continuación, encontrarás toda la información necesaria para instalar, ejecutar y probar esta aplicación.

---

## Tabla de Contenidos:
1. [Descripción](#descripción)
2. [Requisitos](#requisitos)
3. [Instalación y Configuración](#instalación-y-configuración)
4. [Cargar Datos Iniciales](#cargar-datos-iniciales)
5. [Ejemplos de Mensajes](#ejemplos-de-mensajes)
6. [Cómo Ejecutar Tests](#cómo-ejecutar-tests)
7. [Manejo de Errores](#manejo-de-errores)
8. [Endpoints Disponibles](#endpoints-disponibles)

---

## Descripción

El objetivo de este proyecto es ofrecer un chatbot que permita a los usuarios:
- Consultar el menú de sushi disponible.
- Realizar pedidos de manera sencilla.
- Resolver preguntas frecuentes como "¿están abiertos?".

Este proyecto incluye un backend construido con **Node.js** y **MongoDB** y un frontend básico con **React** para interactuar con el chatbot.

---

## Requisitos

Asegúrate de tener las siguientes herramientas instaladas:
- **Node.js** v18.20.5 o superior
- **NPM** o **Yarn**
- **MongoDB** (local o en la nube)

---

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Ariel-0810/Nular_ChatBot-API.git
   cd Nular_ChatBot-API
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Configura las variables de entorno. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
   ```bash
    MONGODB_URI=mongodb://127.0.0.1:27017/sushi_chatbotia
    PORT=3001
    JWT_SECRET=your_secret_key
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre el navegador en http://localhost:3001 para acceder a la API.


## Cargar Datos Iniciales

Para inicializar la base de datos con datos de ejemplo:

1. Asegúrate de tener el archivo data.json en la raíz del proyecto. Este archivo debe contener información sobre los productos.

2. Ejecuta el siguiente comando:
   ```bash
   npm run initDB
   ```

3. Verifica que los datos se hayan cargado correctamente en la base de datos MongoDB.

## Ejemplos de Mensajes

El bot responde a los siguientes mensajes:
- **¿Cual es el menú?**: Muestra el meú disponible.
- **Quiero pedir sushi**: Inicia el proceso de pedido mediante una carta interactiva
- **¿Están abiertos'**: Muestra los horarios de atención

## Como Ejecutar Tests

Para ejecutar los tests, usa el siguiente comando:
   ```bash
   npm test
   ```
Los tests verifican:
- La autenticación de usuarios.
- La correcta funcionalidad de los endpoints.

## Manejo de Errores

El proyecto maneja errores como:

- **Autenticación fallida**: Devuelve un código 401 si las credenciales son incorrectas.
- **Datos inválidos**: Devuelve un código 400 si faltan campos obligatorios en la solicitud.
- **Errores del servidor**: Devuelve un código 500 para errores internos.

## Base de Datos

La base de datos está configurada para almacenar:

- **Usuarios**: Datos de inicio de sesión y roles.
- **Productos**: Menú de sushi disponible.
- **Pedidos**: Historial de pedidos realizados por los usuarios.

Para cargar los datos iniciales, sigue las instrucciones en la sección [Cargar Datos Iniciales](#cargar-datos-iniciales)

## Swagger API Docs
Una vez tu servidor este online en localhost,
puedes explorar la documentación de la API generada con Swagger en la siguiente ruta:
   ```bash
   http://localhost:3001/api-docs
   ```
## Contacto
Si tienes preguntas o problemas, no dudes en contactarme en g.a.gomez2016@gmail.com