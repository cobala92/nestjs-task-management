import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRespository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRespository)
    private userRepository: UsersRespository,
  ) {}
}
