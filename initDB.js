import connectDB from "./src/config/db.js";
import Product from "./api/models/Product.js";
import User from "./api/models/User.js";
import { hash } from "bcrypt";
import fs from "fs/promises";
import path from "path";

async function initializeDB() {
  const db = await connectDB();
  if (!db) {
    console.error("Error: No se pudo obtener la conexión a la base de datos.");
    return;
  }

  console.log("Initializing database...");

  const productsData = await fs.readFile(
    path.join(process.cwd(), "data.json"),
    "utf-8"
  );
  const products = JSON.parse(productsData);

  await Product.insertMany(products);
  console.log(`${products.length} products inserted`);

  const users = [
    {
      username: "UsuarioAdmin",
      email: "usuarioadmin@gmail.com",
      password: "Admin123@",
      role: "admin"
    },
    {
      username: "ArielUser",
      email: "arieluser@gmail.com",
      password: "User123@",
      role: "user"
    }
  ];

  for (const user of users) {
    const hashedPassword = await hash(user.password, 10);
    await User.create({ ...user, password: hashedPassword });
    console.log(`User ${user.username} created`);
  }

  console.log("Database initialization complete");
}

initializeDB().catch(console.error);
