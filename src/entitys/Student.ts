import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Class } from './Class';
import { Profile } from './Profile';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToOne(() => Profile)
  @JoinColumn({ name: 'class_id' })
  class: Class;
}
