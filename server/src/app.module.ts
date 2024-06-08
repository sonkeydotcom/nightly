import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmartModule } from './bookmart/bookmart.module';

@Module({
  imports: [AuthModule, UserModule, BookmartModule],
})
export class AppModule {}
