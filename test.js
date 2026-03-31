import { createClient } from "redis";

const client = createClient({
  socket: {
    host: "162.214.102.56",
    port: 6379,
  },
});

client.on("error", (err) => {
  console.log("Redis Error:", err);
});

await client.connect();

console.log("✅ Connected to Redis");

await client.set("test_key", "Hello Redis");
const value = await client.get("test_key");

console.log("Value:", value);

await client.disconnect();
