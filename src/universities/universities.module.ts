import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversityController } from './universities.controller';
import { UniversitiesResolver } from './universities.resolver';

@Module({
  controllers: [UniversityController],
  providers: [UniversitiesService, UniversitiesResolver],
  exports: [UniversitiesService],
})
export class UniversitiesModule {}
