File: mongo_records.js
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  await client.connect();
  const db = client.db("school");
  const students = db.collection("students");

  // Insert sample data
  await students.insertMany([
    { name: "Sathwvik", marks: 85, branch: "CSE" },
    { name: "Lavanya", marks: 90, branch: "ECE" },
    { name: "Ravi", marks: 75, branch: "IT" },
    { name: "Teja", marks: 95, branch: "CSE" },
  ]);
  console.log("✅ Sample records inserted");

  // 1️⃣ FIND - Display all records
  console.log("📄 All Students:");
  console.log(await students.find().toArray());

  // 2️⃣ LIMIT - Show only 2 records
  console.log("📄 First 2 Students:");
  console.log(await students.find().limit(2).toArray());

  // 3️⃣ SORT - Sort by marks descending
  console.log("📄 Sorted by Marks (High to Low):");
  console.log(await students.find().sort({ marks: -1 }).toArray());

  // 4️⃣ CREATE INDEX - Create index on name
  await students.createIndex({ name: 1 });
  console.log("✅ Index created on 'name' field");

  // 5️⃣ AGGREGATE - Average marks by branch
  const avgMarks = await students.aggregate([
    { $group: { _id: "$branch", avgMarks: { $avg: "$marks" } } }
  ]).toArray();
  console.log("📊 Average Marks by Branch:");
  console.log(avgMarks);

  await client.close();
}

run();
How to Run:
mongod
node mongo_records.js
Expected Output:
✅ Sample records inserted
📄 All Students: [ ...4 docs... ]
📄 First 2 Students: [ first two docs ]
📄 Sorted by Marks (High to Low): [ Teja, Lavanya, Sathwvik, Ravi ]
✅ Index created on 'name' field
📊 Average Marks by Branch: [ { _id: 'CSE', avgMarks: 90 }, { _id: 'ECE', avgMarks: 90 }, { _id: 'IT', avgMarks: 75 } ]
 
