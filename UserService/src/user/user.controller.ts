import { Controller, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch('reset-problems')
  async resetProblems(): Promise<number> {
    return await this.userService.resetUserProblems();
  }
}
