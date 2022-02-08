import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversityController } from './universities.controller';
import { UniversitiesResolver } from './universities.resolver';
import { CitiesService } from './cities/cities.service';

@Module({
  controllers: [UniversityController],
  providers: [UniversitiesService, UniversitiesResolver, CitiesService],
  exports: [UniversitiesService, CitiesService],
})
export class UniversitiesModule {}
