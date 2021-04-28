import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDTO } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {
   constructor(@InjectRepository(Quiz) private quizRepository:Repository<Quiz>){}

    async getAllQuiz():Promise<Quiz[]>{
        return await this.quizRepository.
        createQueryBuilder('q')
        .leftJoinAndSelect('q.questions','qt')
        .leftJoinAndSelect('qt.options','o')
        .getMany() 
    }

    async getQuizById(id:number):Promise<Quiz>{
      return await this.quizRepository.findOne(id,{relations:['questions','questions.options']})
    }

    async createQuiz(quiz:CreateQuizDTO){
        return await this.quizRepository.save(quiz)
    }
}
