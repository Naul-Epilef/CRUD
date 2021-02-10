import { Router } from "express";

import User from "../models/User";

import CreateUser from "../services/User/Create";
import Delete from "../services/User/Delete";
import ListAll from "../services/User/ListAll";
import Update from "../services/User/Update";

const app = Router();

app.get("/", async (request, response) => {
  const users = (await new ListAll().execute()) as User[];

  response.json(users);
});

app.post("/", async (request, response) => {
  const { name } = request.body;

  const newUser = (await new CreateUser().execute({ name })) as User;

  response.json(newUser);
});

app.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const user = (await new Update().execute({ id, name })) as User;

  response.json(user);
});

app.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const res = await new Delete().execute({ id });

  response.json(res);
});

export default app;
