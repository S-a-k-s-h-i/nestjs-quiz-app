import { IsNotEmpty, Length } from "class-validator";

export class CreateQptionDTO{
    @IsNotEmpty({message:'The text cannot be empty'})
    @Length(3,255)
    title:string;
    
    @IsNotEmpty()
    questionid:number;
    
    @IsNotEmpty()
    isCorrect:boolean;
}