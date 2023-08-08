import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Note extends Model {
  @Column(DataType.STRING)
  time: string;

  @Column(DataType.TEXT)
  content: string;

  @Column(DataType.STRING)
  category: string;

  @Column(DataType.BOOLEAN)
  archived: boolean;
}
