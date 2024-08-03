import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/orm/prisma.service";
import { UserDto } from "../dto/user.dto";

@Injectable()
export class UserRepository {
    constructor(private prismaService: PrismaService) { }

    async findAll(): Promise<UserDto[]> {
        return await this.prismaService.user.findMany();
    }

    async findByEmail(email: string): Promise<UserDto> {
        return await this.prismaService.user.findUnique({ where: { email } });
    }

    async create(data: UserDto): Promise<UserDto> {
        return await this.prismaService.user.create({ data });
    }

}