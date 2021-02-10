import { getRepository } from "typeorm";

import User from "../../models/User";

interface Request {
  id: string;
  name: string;
}

class Update {
  public async execute({ id, name }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = (await userRepository.findOne(id)) as User;

    user.name = name;

    userRepository.save(user);

    return user;
  }
}

export default Update;
