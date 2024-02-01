// create-employee.dto.ts
import { IsNotEmpty, IsString, IsEmail, IsNumber } from 'class-validator';

export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsNumber()
    employee_id: number;

    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsNotEmpty()
    @IsString()
    last_name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    department_id: number;
}
