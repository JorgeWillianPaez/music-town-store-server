import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import productRoutes from "./routes/productRoutes";
// import swaggerUi from "swagger-ui-express";
import { connect } from "./services/database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;
const databaseUrl = process.env.DATABASE_URL || "";

connect(databaseUrl);

const corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static("public"));

// app.use(
//   "/swagger",
//   swaggerUi.serve,
//   swaggerUi.setup(undefined, {
//     swaggerOptions: {
//       url: "/swagger.json",
//     },
//   })
// );

app.use("/api/product", productRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
