import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDTO } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
   constructor(private quizService : QuizService ){}
   
   @Get('/')
   async getAllQuiz():Promise<Quiz[]>{
       return await this.quizService.getAllQuiz()
   }

   @Get('/:id')
   getQuizById(@Param('id') id:number){
        return this.quizService.getQuizById(id)
   }

   @Post('/create')
   @UsePipes(ValidationPipe)
   async createQuiz(@Body() data:CreateQuizDTO){
       return await this.quizService.createQuiz(data)
   }
}
