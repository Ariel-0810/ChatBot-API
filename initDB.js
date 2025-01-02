import { connectDB } from './src/config/db.js';
import { hash } from 'bcrypt'
import fs from 'fs/promises'
import path from 'path'

async function initializeDB() {
  const db = await connectDB()
  
  console.log('Initializing database...')

  const productsData = await fs.readFile(path.join(process.cwd(), 'data.json'), 'utf-8')
  const products = JSON.parse(productsData)

  await db.collection('products').insertMany(products)
  console.log(`${products.length} products inserted`)

  const users = [
    { username: 'admin', email: 'admin@example.com', password: 'Admin123@', role: 'admin' },
    { username: 'user', email: 'user@example.com', password: 'User123@', role: 'user' }
  ]

  for (const user of users) {
    const hashedPassword = await hash(user.password, 10)
    await db.collection('users').insertOne({
      ...user,
      password: hashedPassword
    })
    console.log(`User ${user.username} created`)
  }

  console.log('Database initialization complete')
}

initializeDB().catch(console.error)