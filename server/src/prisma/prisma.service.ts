import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgres://nightly_user:KtfppN12Jcyo12iay4UsMeewTqy0SsHj@dpg-cpi7e121hbls73bdg9ag-a.oregon-postgres.render.com/nightly',
        },
      },
    });
  }
}
