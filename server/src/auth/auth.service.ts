import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signin() {
    return {
      access_token: 'access_token',
    };
  }

  signup() {
    return {
      access_token: 'access_token',
    };
  }
}
