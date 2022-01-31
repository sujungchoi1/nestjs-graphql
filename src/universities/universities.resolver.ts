import { NotFoundException } from '@nestjs/common';
import {
  Resolver,
  Query,
  ResolveField,
  Args,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { University } from './models/university.model';
import { UniversitiesService } from './universities.service';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Resolver((of) => University)
export class UniversitiesResolver {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Mutation(() => University)
  createUniversity(
    @Args('createUniversityInput') createUniversityInput: CreateUniversityInput,
  ) {
    return this.universitiesService.create(createUniversityInput);
  }

  @Query(() => University, { name: 'university' })
  findOne(@Args('id') id: number) {
    const university = this.universitiesService.findOne(id);
    if (!university) {
      throw new NotFoundException(id);
    }
    return university;
  }

  @Query(() => [University], { name: 'universities' })
  findAll() {
    return this.universitiesService.findAll();
  }

  @Mutation(() => University)
  updateUniversity(
    @Args('updateUniversityInput') updateUniversityInput: UpdateUniversityInput,
  ) {
    return this.universitiesService.updateUniversity(
      updateUniversityInput.id,
      updateUniversityInput,
    );
  }
}
