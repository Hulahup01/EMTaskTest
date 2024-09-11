import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({
    type: "enum",
    enum: ["male", "female"],
  })
  gender: string;

  @Column({ default: false })
  hasProblems: boolean;
}
