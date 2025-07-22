import { from } from "rxjs";
import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from "class-validator";

const passwordRegEx =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
    @IsString()
    @MinLength(2, {message: 'Name is too short'})
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @MinLength(3, {message: 'Username is too short'})
    @IsAlphanumeric(undefined, { message: 'Username must be alphanumeric' })
    username: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Email is not valid' })
    email: string;

    @IsInt()
    age: number;

    @IsString()
    @IsEnum(['m', 'f', 'o'])
    gender: string;

    @IsNotEmpty()
    @Matches(passwordRegEx, {
        message: 'Password must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    })
    password: string;
}
