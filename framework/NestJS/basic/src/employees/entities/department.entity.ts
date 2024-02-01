import { Entity,PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Employee } from "./employee.entity";

@Entity({ name: 'Departments' })
export class Department {
    @PrimaryGeneratedColumn()
    department_id:number;
    
    @Column({length: 50, nullable: false })
    deparment_name :string;

    @OneToMany(type => Employee, employee => employee.department_id)
    employees: Employee[];
}