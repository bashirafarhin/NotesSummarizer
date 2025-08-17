import app from "./app";
import env from "dotenv";
import connectDB from "./db/connection";

const PORT = process.env.PORT;
connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
