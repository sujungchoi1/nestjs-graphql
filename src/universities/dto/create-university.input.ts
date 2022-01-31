import { InputType, Int, Field } from '@nestjs/graphql';
import { City } from '../models/university.model';

@InputType()
export class CreateStateInput {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}
@InputType()
export class CreateCityInput {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => CreateStateInput)
  state: CreateStateInput;
}

@InputType()
export class CreateUniversityInput {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => CreateCityInput)
  city: CreateCityInput;
}
