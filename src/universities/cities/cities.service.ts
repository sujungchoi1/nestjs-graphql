import { Injectable } from '@nestjs/common';
import * as DATA_RESPONSE from '../../data/universities.json';
import { University } from '../../interfaces/university.interface';

@Injectable()
export class CitiesService {
  private readonly universities: University[] = [...DATA_RESPONSE.universities];

  constructor() {
    console.log(this.findCities());
    console.log(this.findCity(1)); // Huntsville
  }

  private cities = [];

  findCities = () => {
    return this.universities.reduce((acc, curr) => {
      acc.push(curr['city']);
      return acc;
    }, this.cities);
  };

  findCity(id: number) {
    return this.cities.find((city) => city.id === id);
  }
}
