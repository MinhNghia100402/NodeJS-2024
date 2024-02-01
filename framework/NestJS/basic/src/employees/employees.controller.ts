import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('/create')
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    // Tạo một đối tượng Employee từ createEmployeeDto
    const newEmployee = await this.employeesService.create(createEmployeeDto);

    // Trả về thông báo hoặc đối tượng Employee đã được tạo
    return {
      message: 'Employee created successfully',
      employee: newEmployee,
    };
  }

  @Get('/api/getall')
  findAll():Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(+id);
  }
}
