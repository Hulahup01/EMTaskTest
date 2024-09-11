import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async seedUsers(count: number) {
    for (let i = 0; i < count; i++) {
      const user = this.userRepository.create({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 100 }),
        gender: faker.helpers.arrayElement(['male', 'female']),
        hasProblems: faker.datatype.boolean(),
      });
      await this.userRepository.save(user);
    }
  }
}
