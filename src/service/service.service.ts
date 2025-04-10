import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateServiceDto, userId: string) {
    return this.prisma.service.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.service.findMany({
      where: { userId },
    });
  }
}