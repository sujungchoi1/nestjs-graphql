import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { University } from '../interfaces/university.interface';
import * as DATA_RESPONSE from '../data/universities.json';
import { Response } from 'express';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Controller('universities')
export class UniversityController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Post()
  create(@Body() createUniversityInput: CreateUniversityInput) {
    return this.universitiesService.create(createUniversityInput);
  }

  // If json data is not imported from the service
  // @Get()
  // async findAll(@Res() res: Response) {
  //   // console.log(res);
  //   res.status(HttpStatus.OK).json(DATA_RESPONSE.universities);
  // }
  @Get()
  async findAll(): Promise<University[]> {
    return this.universitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) UniId: number): Promise<University> {
    return this.universitiesService.findOne(UniId);
  }

  @Put(':id')
  updateUniversity(
    @Param('id') id: number,
    @Body() updateUniversityInput: CreateUniversityInput,
  ) {
    console.log('*** From Controller', updateUniversityInput);
    return this.universitiesService.update(id, updateUniversityInput);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.universitiesService.delete(id);
  }
}
