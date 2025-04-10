import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
export declare class AppointmentController {
    private appointmentService;
    constructor(appointmentService: AppointmentService);
    create(dto: CreateAppointmentDto, userId: string): import(".prisma/client").Prisma.Prisma__AppointmentClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date;
        serviceId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<({
        service: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            price: number;
            userId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        date: Date;
        serviceId: string;
    })[]>;
}
