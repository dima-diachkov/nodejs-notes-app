import { Module } from '@nestjs/common';
import { NoteController } from './app.controller';
import { NoteService } from './app.service';
import { NestFactory } from '@nestjs/core';

@Module({
  controllers: [NoteController],
  providers: [NoteService],
})
export class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
