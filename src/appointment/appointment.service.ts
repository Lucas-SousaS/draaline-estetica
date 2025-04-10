// src/appointment/appointment.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateAppointmentDto, userId: string) {
    return this.prisma.appointment.create({
      data: {
        date: dto.date,
        serviceId: dto.serviceId,
        userId,
      },
    });
  }

  findAll(userId: string) {
    return this.prisma.appointment.findMany({
      where: { userId },
      include: { service: true },
    });
  }
}
