import { Module } from '@nestjs/common';
import { MailService } from '../../service';

@Module({
  imports: [],
  controllers: [],
  providers: [MailService],
})
export class MailModule {}
