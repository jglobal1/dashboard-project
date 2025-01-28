import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Connect to MongoDB
      const { db } = await connectToDatabase();

      // Fetch data from the "tools" collection
      const tools = await db.collection("tools").find({}).toArray();

      // Return the fetched data as JSON
      res.status(200).json(tools);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ message: "Failed to fetch tools data", error: error.message });
    }
  } else {
    // Only allow GET requests
    res.status(405).json({ message: "Method not allowed" });
  }
}
