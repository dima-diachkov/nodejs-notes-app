import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { Note } from './app.interface';
import { CreateNoteDto, UpdateNoteDto } from './app.dto';
import { validate, ValidatorOptions } from 'class-validator';
import { mockNotes } from './mockData';

@Injectable()
export class NoteService {
  private notes: Note[] = [...mockNotes];

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNoteById(id: string): Note {
    const noteId = parseInt(id, 10);
    const note = this.notes.find((note) => note.id === noteId);
    if (!note) {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
    return note;
  }

  async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const newNote: Note = {
      id: Date.now(),
      time: createNoteDto.time,
      content: createNoteDto.content,
      category: createNoteDto.category,
      archived: createNoteDto.archived || false,
    };

    const validatorOptions: ValidatorOptions = { groups: ['create'] };
    const errors = await validate(newNote, validatorOptions);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    this.notes.push(newNote);
    return newNote;
  }

  async editNote(id: string, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const noteId = parseInt(id, 10);
    const index = this.notes.findIndex((note) => note.id === noteId);
    if (index >= 0) {
      const updatedNote: Note = {
        ...this.notes[index],
        ...updateNoteDto,
        id: noteId,
      };

      const validatorOptions: ValidatorOptions = { groups: ['update'] };
      const errors = await validate(updatedNote, validatorOptions);

      if (errors.length > 0) {
        throw new BadRequestException(errors);
      }

      this.notes[index] = updatedNote;
      return updatedNote;
    } else {
      throw new NotFoundException(`Note with ID ${id} not found`);
    }
  }

  removeNoteById(id: string): void {
    const noteId = parseInt(id, 10);
    this.notes = this.notes.filter((note) => note.id !== noteId);
  }
}
