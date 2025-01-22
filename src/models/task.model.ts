import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    CreatedAt,
    UpdatedAt,
  } from 'sequelize-typescript';
  
  @Table
  export class Task extends Model {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    title: string;
  
    @Column({
      type: DataType.TEXT,
    })
    description: string;
  
    @Default(false)
    @Column({
      type: DataType.BOOLEAN,
    })
    completed: boolean;
  
    @Column({
      type: DataType.ARRAY(DataType.STRING),
    })
    tags: string[];
  
    @Column({
      type: DataType.DATE,
      allowNull: true,
    })
    dueDate: Date;
  
    @CreatedAt
    createdAt: Date;
  
    @UpdatedAt
    updatedAt: Date;
  }
  