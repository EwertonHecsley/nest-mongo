import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async findAll(): Promise<UserDto[]> {
        return await this.userRepository.findAll();
    }

    async findByEmail(email: string): Promise<UserDto> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) throw new HttpException("Email não encontrado.", HttpStatus.NOT_FOUND);

        return user;
    }

    async create(data: UserDto): Promise<UserDto> {
        const userExist = await this.userRepository.findByEmail(data.email);
        if (userExist) throw new HttpException("Email já cadastrado.", HttpStatus.BAD_REQUEST);

        return await this.userRepository.create(data);
    }

    async delete(email: string) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) throw new HttpException("Email não encontrado.", HttpStatus.NOT_FOUND);

        return await this.userRepository.delete(email);
    }
}
