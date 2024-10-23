import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserService } from './users/user.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const userService = app.get(UserService);
  userService.findAll();
}
bootstrap();
