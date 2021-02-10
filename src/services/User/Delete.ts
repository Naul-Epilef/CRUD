import { getRepository } from "typeorm";

import User from "../../models/User";

interface Request {
  id: string;
}

interface Response {
  message: string;
}

class Delete {
  public async execute({ id }: Request): Promise<Response> {
    const userRepository = getRepository(User);
    const user = (await userRepository.findOne(id)) as User;
    userRepository.delete(id);

    const response: Response = {
      message: `User ${user.name} was deleted`,
    };

    return response;
  }
}

export default Delete;
