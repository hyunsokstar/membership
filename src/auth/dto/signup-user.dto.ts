import { IsEmail, IsString, IsOptional, MinLength } from 'class-validator';

export class SignUpUserDto {
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    phoneNumber: string;

    @IsString()
    @MinLength(8)
    password: string;

}
