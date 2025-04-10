import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { GetUser } from '../auth/decorator';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';

@UseGuards(JwtAuthGuard)
@Controller('service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Post()
  create(@Body() dto: CreateServiceDto, @GetUser('id') userId: string) {
    return this.serviceService.create(dto, userId);
  }

  @Get()
  findAll(@GetUser('id') userId: string) {
    return this.serviceService.findAll(userId);
  }
}