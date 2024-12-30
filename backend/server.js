import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import seedDB from "./config/seeders.js";
import notFound from "./middlewares/notFoundMiddleware.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import router from "./routes/rateRoutes.js";
import routes from "./routes/cityRoutes.js";

config(); // Load environment variables from .env file

const app = express();

connectDB();
// seedDB();
app.use(express.json()); 


app.use("/rate", router); 
app.use("/city", routes); 

// Middleware for 404 Not Found error
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
