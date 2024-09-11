import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async resetUserProblems(): Promise<number> {
    const result = await this.userRepository.update({ hasProblems: true }, { hasProblems: false });
    return result.affected || 0;
  }
}

