import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './sequelize.config';
import { Note } from './note.model';
import { NoteController } from './app.controller';
import { NoteService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...sequelizeConfig,
      models: [Note],
    }),
    SequelizeModule.forFeature([Note]),
  ],
  controllers: [NoteController],
  providers: [NoteService],
})
export class AppModule {}

