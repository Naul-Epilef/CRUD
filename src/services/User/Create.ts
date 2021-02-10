import { getRepository } from "typeorm";
import { v4 } from "uuid";
import User from "../../models/User";

interface Request {
  name: string;
}

class CreateUser {
  public async execute({ name }: Request): Promise<User> {
    const userRepository = getRepository(User);
    const newUser = userRepository.create({
      id: v4(),
      name,
    });

    userRepository.save(newUser);

    return newUser;
  }
}

export default CreateUser;
