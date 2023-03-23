import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './Student';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'full_name' })
  fullName: string;

  @Column({ type: 'datetime' })
  birthday: Date;

  @OneToOne(() => Student)
  @JoinColumn({ name: 'user_id' })
  student: Student;
}
