import { IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDTO{
    @IsNotEmpty({message:'The question cannot be empty'})
    @Length(3,255)
    question:string;
    
    @IsNotEmpty()
    quizid:number
}