import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Option{
     @PrimaryGeneratedColumn()
     id:number;
     
     @Column({ type:'varchar'})
     title:string;
     
     @Column({type:'boolean'})
     isCorrect:boolean;

     @ManyToOne(() => Question,question => question.options)
     question:Question
}