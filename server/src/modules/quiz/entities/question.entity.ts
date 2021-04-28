import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Quiz } from "./quiz.entity";
import { Option } from './option.entity';

@Entity('questions')
export class Question{
    @PrimaryGeneratedColumn()
    id:number
    
    @Column({type:'varchar'})
    question:string

    @ManyToOne(() => Quiz, quiz => quiz.questions)
    quiz:Quiz
    
    @OneToMany(() => Option,options => options.question)
    options:Option[]
}