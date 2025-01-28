import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Access MongoDB URI from .env file
const options = {};

let client;
let db;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

export async function connectToDatabase() {
  if (db) return { db }; // Reuse the connection if already established

  client = await MongoClient.connect(uri, options);
  db = client.db("dashboard"); // Replace with your database name
  return { db };
}
