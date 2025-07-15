import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser());

// import routes
import aiRoutes from "./routes/ai.routes.js";

// use routes
app.use("/api/v1/ai", aiRoutes);

export default app;