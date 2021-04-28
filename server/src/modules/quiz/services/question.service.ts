import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDTO } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
   constructor(@InjectRepository(Question) private questionRepository:Repository<Question>){}

    async createQuestion(question:CreateQuestionDTO,quiz:Quiz):Promise<Question>{
        const newQuestion = await this.questionRepository.create({
            ...question,
            quiz:quiz
          });
          await this.questionRepository.save(newQuestion);
          return newQuestion;
    }

    async getQuestionById(id:number):Promise<Question>{
        return await this.questionRepository.findOne(id,{relations:['quiz','options']})
    }
}
