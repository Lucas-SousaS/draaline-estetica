import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signUp(data: { name: string; email: string; password: string }) {
    const existing = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (existing) throw new Error('Email já cadastrado');

    const hashed = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { ...data, password: hashed },
    });

    return this.generateToken(user.id);
  }

  async signIn(data: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (!user || !user.password) throw new UnauthorizedException();

    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) throw new UnauthorizedException();

    return this.generateToken(user.id);
  }

  private generateToken(userId: string) {
    const token = this.jwt.sign({ sub: userId });
    return { access_token: token };
  }
}
