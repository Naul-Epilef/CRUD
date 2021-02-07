import { Router } from "express";
import { getRepository } from "typeorm";
import { v4 } from "uuid";
import User from "../models/User";

const app = Router();

app.get("/", async (request, response) => {
  const userRepository = getRepository(User);

  const users = await userRepository.find();

  response.json(users);
});

app.post("/", async (request, response) => {
  const { name } = request.body;
  const userRepository = getRepository(User);

  console.log(v4());

  const newUser = await userRepository.create({
    id: v4(),
    name,
  });

  await userRepository.save(newUser);

  response.json(newUser);
});

app.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const userRepository = getRepository(User);

  const user = (await userRepository.findOne(id)) as User;

  user.name = name;

  userRepository.save(user);
  response.json(user);
});

app.delete("/:id", (request, response) => {
  const { id } = request.params;

  const userRepository = getRepository(User);

  userRepository.delete(id);

  response.json({ message: "Usuário deletado" });
});

export default app;
