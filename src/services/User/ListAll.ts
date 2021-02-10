import { getRepository } from "typeorm";

import User from "../../models/User";

class ListAll {
  public async execute(): Promise<User[]> {
    const userRepository = getRepository(User);

    const users = userRepository.find();

    return users;
  }
}

export default ListAll;
