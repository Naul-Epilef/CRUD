import express from "express";
import routes from "./routes";

import connection from "./config/database";

const app = express();

const validatingConnection = () => {
  connection()
    .then((t) => {
      app.listen("3333", () => {
        console.log("Server started");
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

app.use(express.json());
app.use(routes);

validatingConnection();
