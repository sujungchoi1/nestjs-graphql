import { Injectable, NotFoundException } from '@nestjs/common';
import { University } from '../interfaces/university.interface';
import * as DATA_RESPONSE from '../data/universities.json';
import { CreateUniversityInput } from './dto/create-university.input';
import { UpdateUniversityInput } from './dto/update-university.input';

@Injectable()
export class UniversitiesService {
  private universities: University[] = [...DATA_RESPONSE.universities];

  create(createUniversityInput: CreateUniversityInput) {
    this.universities.push(createUniversityInput);
  }

  findAll(): University[] {
    return [...this.universities];
  }

  private findUniversity(id: number): [University, number] {
    const universityIndex = this.universities.findIndex((uni) => uni.id === id);
    // console.log(id, universityIndex);
    const university = this.universities[universityIndex];
    if (!university) {
      throw new NotFoundException('Could not find university');
    }
    return [university, universityIndex];
  }

  findOne(universityId: number) {
    // without [0] it returns "0" then the object
    const university = this.findUniversity(universityId)[0];
    return { ...university };
  }

  updateUniversity(
    uniId: number,
    updateUniversityInput: UpdateUniversityInput,
  ) {
    console.log('getting called');
    const [university, index] = this.findUniversity(uniId);
    const updatedUniversity = { ...updateUniversityInput };
    console.log(updatedUniversity);
    this.universities[index] = updatedUniversity;
  }
}
