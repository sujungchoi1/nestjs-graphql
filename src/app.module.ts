import { Module } from '@nestjs/common';
import { UniversitiesModule } from './universities/universities.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    UniversitiesModule,
    GraphQLModule.forRoot({
      // autoSchemaFile: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
  ],
})
export class AppModule {}
