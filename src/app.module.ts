import { Module } from '@nestjs/common';
import { NoteController } from './app.controller';
import { NoteService } from './app.service';

@Module({
  controllers: [NoteController],
  providers: [NoteService],
})
export class AppModule {}
