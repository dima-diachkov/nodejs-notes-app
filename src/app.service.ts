import { Injectable, BadRequestException } from '@nestjs/common';
import { Note } from './app.interface';
import { CreateNoteDto, UpdateNoteDto } from './app.dto';
import { validate } from 'class-validator';
import { mockNotes } from './mockData';

@Injectable()
export class NoteService {
  private notes: Note[] = [...mockNotes];

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNoteById(id: number): Note {
    return this.notes.find((note) => note.id === id);
  }

  async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const newNote: Note = {
      id: Date.now(),
      time: createNoteDto.time,
      content: createNoteDto.content,
      category: createNoteDto.category,
      archived: createNoteDto.archived || false,
    };

    const errors = await validate(newNote); // Validate the new note object

    if (errors.length > 0) {
      // If validation fails, throw a BadRequestException with validation errors
      throw new BadRequestException(errors);
    }

    this.notes.push(newNote);
    return newNote;
  }

  async editNote(id: number, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index >= 0) {
      const updatedNote: Note = {
        ...this.notes[index],
        ...updateNoteDto,
        id,
      };

      const errors = await validate(updatedNote); // Validate the updated note object

      if (errors.length > 0) {
        // If validation fails, throw a BadRequestException with validation errors
        throw new BadRequestException(errors);
      }

      this.notes[index] = updatedNote;
      return updatedNote;
    }
    return null;
  }

  removeNoteById(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
