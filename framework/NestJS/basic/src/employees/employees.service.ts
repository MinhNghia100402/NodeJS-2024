import { Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeesService {

  constructor(

    @Inject('REQUEST') private request: Request,

    @InjectRepository(Employee)
    private readonly EmployeeRepo: Repository<Employee>
  )
  {}


  async findAll(): Promise<Employee[]> {
    return await this.EmployeeRepo.find();
  }
  
  async create(employeeData: Employee): Promise<Employee> {
    const newEmployee = this.EmployeeRepo.create(employeeData);
    return await this.EmployeeRepo.save(newEmployee);
  }
  // findAll() {
  //   return `This action returns all employees`;
  // }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
