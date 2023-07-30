import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { NoteService } from './app.service';
import { CreateNoteDto, UpdateNoteDto } from './app.dto';


@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  getAllNotes() {
    return this.noteService.getAllNotes();
  }

  @Get(':id')
  getNoteById(@Param('id') id: number) {
    return this.noteService.getNoteById(id);
  }

  @Post()
  createNote(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.createNote(createNoteDto);
  }

  @Patch(':id')
  editNote(@Param('id') id: number, @Body() updateNoteDto: UpdateNoteDto) {
    return this.noteService.editNote(id, updateNoteDto);
  }

  @Delete(':id')
  removeNote(@Param('id') id: number) {
    return this.noteService.removeNoteById(id);
  }

  @Get('hello')
  getHello(): string {
    return 'Hello World!';
  }
}

