
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './department.entity';
@Entity({ name: 'Employees' })
export class Employee {
    @PrimaryGeneratedColumn()
    employee_id: number;

    @Column({ length: 500 })
    first_name: string;

    @Column({ length:30})
    last_name: string;

    @Column({length:50})
    email: string;

    @ManyToOne(type => Department,{nullable: false})
    @JoinColumn({name:'department_id'})
    department_id: number;
}
