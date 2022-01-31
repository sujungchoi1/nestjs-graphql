import { Injectable, NotFoundException } from '@nestjs/common';
import { University } from '../interfaces/university.interface';
import * as DATA_RESPONSE from '../data/universities.json';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Injectable()
export class UniversitiesService {
  private readonly universities: University[] = [...DATA_RESPONSE.universities];

  create(createUniversityInput: CreateUniversityInput) {
    this.universities.push(createUniversityInput);
  }

  async findAll(): Promise<University[]> {
    return await this.universities;
  }

  private findUniversity(id: number): [University, number] {
    const universityIndex = this.universities.findIndex((uni) => uni.id === id);
    const university = this.universities[universityIndex];
    if (!university) {
      throw new NotFoundException('Could not find university');
    }
    return [university, universityIndex];
  }

  async findOne(id: number): Promise<University> {
    // without [0] it returns "0" then the object
    // const university = this.findUniversity(universityId)[0];
    // return { ...university };
    return await this.universities.find((uni) => uni.id === id);
  }

  update(id: number, updateUniversityInput: CreateUniversityInput) {
    const index = this.universities.findIndex(
      (uni) => uni.id === updateUniversityInput.id,
    );
    // console.log('*** from service', id, index, updateUniversityInput);
    const updatedUniversity = { ...updateUniversityInput };
    this.universities[index] = updatedUniversity;
  }

  delete(id: number) {
    // const uniToDelete = this.universities.filter((uni) => uni.id !== id);
    // return this.universities.delete(uniToDelete);
    const [university, index] = this.findUniversity(id);
    this.universities.splice(index, 1);
  }
}
