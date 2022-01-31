import {
  Controller,
  Get,
  Req,
  Post,
  Param,
  Body,
  Query,
  Delete,
  ParseIntPipe,
  Res,
  HttpStatus,
  Put,
  Patch,
} from '@nestjs/common';
import { UniversitiesService } from './universities.service';
// import { CreateUniversityDto } from '../dto/create-university.dto';
import { University } from '../interfaces/university.interface';
import * as DATA_RESPONSE from '../data/universities.json';
import { Response } from 'express';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Controller('universities')
export class UniversityController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Post()
  async create(@Body() createUniversityInput: CreateUniversityInput) {
    return this.universitiesService.create(createUniversityInput);
  }

  // If json data is not imported in the service
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
  async findOne(@Param('id', ParseIntPipe) UniId: number) {
    return this.universitiesService.findOne(UniId);
  }

  @Patch(':id')
  updateUniversity(
    @Param('id') id: number,
    @Body() updateUniversityInput: UpdateUniversityInput,
  ) {
    this.universitiesService.updateUniversity(id, updateUniversityInput);
    console.log(updateUniversityInput);
    return null;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
