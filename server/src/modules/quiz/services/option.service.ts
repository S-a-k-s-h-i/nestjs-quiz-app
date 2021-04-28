import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQptionDTO } from "../dto/create-option.dto";
import { Option } from '../entities/option.entity'
import { Question } from "../entities/question.entity";

@Injectable()
export class OptionService{
     constructor(@InjectRepository(Option) private OptionRepository:Repository<Option>){}

     async createOption(option:CreateQptionDTO,question:Question){
          const newOption = this.OptionRepository.create({
               ...option,

               question:question
          });
          await this.OptionRepository.save(newOption)

          return newOption
     }

}