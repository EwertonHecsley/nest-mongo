import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaService } from 'src/infra/orm/prisma.service';
import { HashService } from 'src/infra/hash/hash.service';

@Module({
  providers: [UserService, UserRepository, PrismaService, HashService],
  controllers: [UserController]
})
export class UserModule { }
