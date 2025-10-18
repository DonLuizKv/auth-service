import express, { Response, Request } from "express";
import cors from "cors";
import dotenv from "dotenv"
import http from "http";
import cookieParser from "cookie-parser"
import authRoutes from "./auth.routes";

// env
dotenv.config();
const PORT = process.env.PORT || 5000;
const ORIGINS = process.env.ORIGINS?.split(",") || [];

// Server
const app = express();
const server = http.createServer(app);

// configs
const CorsOptions = {
    origin: "http://localhost:5000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

// Middleware
app.use(cors(CorsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);

app.get("/", (req:Request, res: Response) => res.send("Bienvenido a mi mundo"));
server.listen(PORT, () => console.log("se esat escuchandooo " + PORT));