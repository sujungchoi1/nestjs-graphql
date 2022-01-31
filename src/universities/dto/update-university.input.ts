import {
  CreateUniversityInput,
  CreateCityInput,
  CreateStateInput,
} from './create-university.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStateInput extends PartialType(CreateStateInput) {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
@InputType()
export class UpdateCityInput extends PartialType(CreateCityInput) {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => CreateStateInput)
  state: CreateStateInput;
}

@InputType()
export class UpdateUniversityInput extends PartialType(CreateUniversityInput) {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => CreateCityInput)
  city: CreateCityInput;
}
