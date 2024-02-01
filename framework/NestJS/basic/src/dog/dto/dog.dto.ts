import { IsString, IsNumber } from 'class-validator';

export class CreateCatDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly age: number;

    @IsString()
    readonly breed: string;
}
