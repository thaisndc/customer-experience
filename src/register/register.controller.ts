import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async register(@Body() req) {
    const { name, email, password, site, phone } = req;
    return this.registerService.register(name, email, password, site, phone);
  }
}