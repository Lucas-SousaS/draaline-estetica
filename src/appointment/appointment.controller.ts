import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { GetUser } from '../auth/decorator';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@UseGuards(JwtAuthGuard)
@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post()
  create(@Body() dto: CreateAppointmentDto, @GetUser('id') userId: string) {
    return this.appointmentService.create(dto, userId);
  }

  @Get()
  findAll(@GetUser('id') userId: string) {
    return this.appointmentService.findAll(userId);
  }
}