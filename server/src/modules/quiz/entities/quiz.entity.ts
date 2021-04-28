import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Quiz{
    @PrimaryGeneratedColumn({comment:'quiz unique identifier'})
    id:number
    
    @Column({type:'varchar'})
    title:string
    
    @Column({type:"varchar"})
    description:string
    
    @Column({
        type:'boolean',
        default:1
    })
    isActive:boolean

    @OneToMany(() => Question,question => question.quiz)
    questions:Question[]
}