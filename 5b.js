File: mongo_crud.js
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  await client.connect();
  const db = client.db("college");
  const students = db.collection("students");

  // CREATE
  await students.insertOne({ name: "Ravi", age: 20, course: "CSE" });
  console.log("Inserted!");

  // READ
  console.log(await students.find().toArray());

  // UPDATE
  await students.updateOne({ name: "Ravi" }, { $set: { course: "Data Science" } });
  console.log("Updated!");

  // DELETE
  await students.deleteOne({ name: "Ravi" });
  console.log("Deleted!");

  await client.close();
}

run();
How to Run:
mongod
node mongo_crud.js
Expected Output:
Inserted!
[ { _id: <ObjectId>, name: 'Ravi', age: 20, course: 'CSE' }, ... ]
Updated!
Deleted!
