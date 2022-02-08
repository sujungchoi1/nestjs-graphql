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
import { CitiesService } from './cities/cities.service';

@Resolver((of) => University)
export class UniversitiesResolver {
  constructor(
    private readonly universitiesService: UniversitiesService,
    private readonly citiesService: CitiesService,
  ) {}

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

  @Query(() => [University], { name: 'cities' })
  findCities() {
    return this.citiesService.findCities();
  }

  @Query(() => University, { name: 'city' })
  findCity(@Args('id') id: number) {
    const city = this.citiesService.findCity(id);
    if (!city) {
      throw new NotFoundException(id);
    }
    return city;
  }

  @Mutation(() => University)
  updateUniversity(
    @Args('updateUniversityInput') updateUniversityInput: CreateUniversityInput,
  ) {
    return this.universitiesService.update(
      updateUniversityInput.id,
      updateUniversityInput,
    );
  }

  @Mutation(() => University)
  removeUniversity(@Args('id') id: number) {
    return this.universitiesService.delete(id);
  }
}
