import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateNoteDto, UpdateNoteDto } from './app.dto';
import { Note } from './note.model';

@Injectable()
export class NoteService {
  constructor(
    @InjectModel(Note)
    private readonly noteModel: typeof Note,
  ) {}

  async getAllNotes(): Promise<Note[]> {
    return this.noteModel.findAll();
  }

  async getNoteById(id: string): Promise<Note> {
    const note = await this.noteModel.findByPk(id);
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
    return note;
  }

  async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const newNote = this.noteModel.build({
      ...createNoteDto,
      archived: createNoteDto.archived || false,
    });

    await newNote.save();

    return newNote;
  }

  async editNote(id: string, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const [_, [updatedNote]] = await this.noteModel.update(updateNoteDto, {
      where: { id },
      returning: true,
    });
    if (!updatedNote) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
    return updatedNote;
  }

  async removeNoteById(id: string): Promise<void> {
    await this.noteModel.destroy({ where: { id } });
  }
}
