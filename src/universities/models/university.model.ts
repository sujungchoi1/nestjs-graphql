import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class State {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class City {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => State)
  state: State;
}

@ObjectType()
export class University {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => City)
  city: City;
}
