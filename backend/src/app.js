import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// import routes
import aiRoutes from "./routes/ai.routes.js";

// use routes
app.use("/api/v1/ai", aiRoutes);

export default app;