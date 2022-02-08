import { Module } from '@nestjs/common';
import { UniversitiesModule } from './universities/universities.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesService } from './universities/cities/cities.service';

@Module({
  imports: [
    UniversitiesModule,
    GraphQLModule.forRoot({
      // autoSchemaFile: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, CitiesService],
})
export class AppModule {}
