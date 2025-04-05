import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    signUp(data: {
        name: string;
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    signIn(data: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    private generateToken;
}
