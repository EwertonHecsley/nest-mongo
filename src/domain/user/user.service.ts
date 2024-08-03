import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async findAll() {
        return await this.userRepository.findAll();
    }

    async findByEmail(email: string) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) throw new HttpException("Email não encontrado.", HttpStatus.NOT_FOUND);

        return user;
    }
}
