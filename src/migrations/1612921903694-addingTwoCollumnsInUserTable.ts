import { query } from "express";
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addingTwoCollumnsInUserTable1612921903694
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("users", [
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "now()",
      }),
      new TableColumn({
        name: "updated_at",
        type: "timestamp",
        default: "now()",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("users", [
      new TableColumn({
        name: "created_at",
        type: "timestamp",
      }),
      new TableColumn({
        name: "updated_at",
        type: "timestamp",
      }),
    ]);
  }
}
