import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQptionDTO } from "../dto/create-option.dto";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";

@Controller('question/option')
export class OptionController{
   constructor(private optionService:OptionService, private questionService:QuestionService){}

   @Post('')
   @UsePipes(ValidationPipe)
   async saveOptionToQuestion(@Body() createOptionDTO:CreateQptionDTO){
      const question = await this.questionService.getQuestionById(createOptionDTO.questionid)
      return this.optionService.createOption(createOptionDTO,question);
      // return {createOptionDTO,question}
   }

}