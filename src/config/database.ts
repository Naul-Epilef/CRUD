import { createConnection } from "typeorm";

const connection = async () => createConnection();
export default connection;
