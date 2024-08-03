import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/orm/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private prismaService: PrismaService) { }

    async findAll() {
        return await this.prismaService.user.findMany();
    }

    async findByEmail(email: string) {
        return await this.prismaService.user.findUnique({ where: { email } });
    }

}