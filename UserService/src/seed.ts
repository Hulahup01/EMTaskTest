import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedService } from './user/seed.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seedService = app.get(SeedService);
  const count = 10000;
  console.log(`Seeding ${count} users....`);
  await seedService.seedUsers(count);
  console.log('Seeding complete.');

  await app.close();
}

bootstrap();
