import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

// 1. Create a global/cached client connection helper
const client = new MongoClient(mongoUri);

// Instantly fire the connection background pool handler
client.connect().catch((err) => {
  console.error("❌ Failed to establish early MongoDB connection pool:", err);
});

const db = client.db('driveMartDB');

export const auth = betterAuth({
  // Pass the established db context cleanly
  database: mongodbAdapter(db), 
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});