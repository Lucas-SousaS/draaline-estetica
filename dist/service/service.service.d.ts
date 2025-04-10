import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServiceService {
    private prisma;
    constructor(prisma: PrismaService);
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
