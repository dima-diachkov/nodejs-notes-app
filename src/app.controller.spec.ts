import { Test, TestingModule } from '@nestjs/testing';
import { NoteController } from './app.controller';
import { NoteService } from './app.service';

describe('AppController', () => {
  let appController: NoteController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NoteController],
      providers: [NoteService],
    }).compile();

    appController = app.get<NoteController>(NoteController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
