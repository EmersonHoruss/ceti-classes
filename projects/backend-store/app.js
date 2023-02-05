import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/route.index.js";

import keys from "./keys.js";

const app = express();
const corsOptions = { origin: "http://localhost:4200" };

//settings
app.set("port", process.env.PORT || keys.PORT);

//middleware
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/product", routes.product);
app.use("/sell", routes.sell)

export default app;
