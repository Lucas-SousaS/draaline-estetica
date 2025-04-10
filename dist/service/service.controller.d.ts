import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServiceController {
    private serviceService;
    constructor(serviceService: ServiceService);
    create(dto: CreateServiceDto, userId: string): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        price: number;
        userId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        price: number;
        userId: string;
    }[]>;
}
