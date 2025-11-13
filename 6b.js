File: mongo_db_ops.js
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  await client.connect();

  // ✅ CREATE DATABASE
  const db = client.db("school");
  console.log("✅ Database 'school' created!");

  // ✅ CREATE COLLECTION
  await db.createCollection("students");
  console.log("✅ Collection 'students' created!");

  // ✅ INSERT SAMPLE DOCUMENT
  await db.collection("students").insertOne({ name: "Sathwvik", class: "CSE" });
  console.log("📄 Sample document inserted!");

  // ✅ DROP COLLECTION
  await db.collection("students").drop();
  console.log("🗑️ Collection 'students' dropped!");

  // ✅ DROP DATABASE
  await db.dropDatabase();
  console.log("🗑️ Database 'school' dropped!");

  await client.close();
}

run();
How to Run:
mongod
node mongo_db_ops.js
Expected Output:
✅ Database 'school' created!
✅ Collection 'students' created!
📄 Sample document inserted!
🗑️ Collection 'students' dropped!
🗑️ Database 'school' dropped!
 
